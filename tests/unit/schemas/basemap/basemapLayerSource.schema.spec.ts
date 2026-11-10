import { z } from 'zod';
import { Domain } from '../../../../src/enums/common/domain';
import { SourceType } from '../../../../src/enums/common/metadata/sourceType';
import { ResourceResolutionStatus } from '../../../../src/enums/basemap/resourceResolutionStatus';
import {
  BasemapLayerSourceInputSchema,
  RasterUniquenessSchema,
  createBasemapLayerSourceOutputSchema,
} from '../../../../src/schemas/basemap/basemapLayerSource.schema';

describe('RasterUniquenessSchema', () => {
  it.each([
    ['a full uniqueness', { productId: '12345', productType: 'Orthophoto' }],
    ['an empty object', {}],
    ['a null productId', { productId: null, productType: 'Orthophoto' }],
    ['an unrecognized productType - not validated against ProductType at this boundary', { productId: '12345', productType: 'NotARealProductType' }],
  ])('accepts %s', (_label, value) => {
    expect(RasterUniquenessSchema.safeParse(value).success).toBe(true);
  });
});

describe('BasemapLayerSourceInputSchema', () => {
  it('accepts a CATALOG_RESOURCE source with empty uniqueness', () => {
    const result = BasemapLayerSourceInputSchema.safeParse({ type: SourceType.CATALOG_RESOURCE, domain: Domain.RASTER, uniqueness: {} });
    expect(result.success).toBe(true);
  });

  it('accepts an EXTERNAL source with passthrough provider-specific keys', () => {
    const result = BasemapLayerSourceInputSchema.safeParse({
      type: SourceType.EXTERNAL,
      details: { protocol: 'WMTS', name: 'n', url: 'https://example.com', layer: 'ortho', matrixSet: 'EPSG:3857' },
    });
    expect(result.success).toBe(true);
    expect(result.success && result.data.type === SourceType.EXTERNAL && result.data.details.layer).toBe('ortho');
  });

  it('rejects an EXTERNAL source with empty details.name', () => {
    const result = BasemapLayerSourceInputSchema.safeParse({
      type: SourceType.EXTERNAL,
      details: { protocol: 'XYZ', name: '', url: 'https://example.com' },
    });
    expect(result.success).toBe(false);
  });

  it('rejects an unknown discriminator value', () => {
    const result = BasemapLayerSourceInputSchema.safeParse({ type: 'NOT_A_TYPE' });
    expect(result.success).toBe(false);
  });
});

describe('createBasemapLayerSourceOutputSchema - write source plus resolution status', () => {
  const layerSchema = z.object({ id: z.string() }).passthrough();
  const capabilitiesSchema = z.object({ id: z.string() }).passthrough();
  const schema = createBasemapLayerSourceOutputSchema(layerSchema, capabilitiesSchema);

  it('accepts a RESOLVED catalog resource', () => {
    const result = schema.safeParse({
      type: SourceType.CATALOG_RESOURCE,
      domain: Domain.RASTER,
      uniqueness: { productId: '1', productType: 'Orthophoto' },
      status: ResourceResolutionStatus.RESOLVED,
      layer: { id: 'record-1' },
      capabilities: { id: 'cap-1' },
    });
    expect(result.success).toBe(true);
  });

  it('accepts an UNRESOLVED catalog resource with null layer/capabilities', () => {
    const result = schema.safeParse({
      type: SourceType.CATALOG_RESOURCE,
      domain: Domain.RASTER,
      uniqueness: {},
      status: ResourceResolutionStatus.UNRESOLVED,
      layer: null,
      capabilities: null,
    });
    expect(result.success).toBe(true);
  });

  it('accepts an EXTERNAL source (always status RESOLVED)', () => {
    const result = schema.safeParse({
      type: SourceType.EXTERNAL,
      status: ResourceResolutionStatus.RESOLVED,
      details: { protocol: 'XYZ', name: 'n', url: 'https://example.com' },
    });
    expect(result.success).toBe(true);
  });

  it('rejects a RESOLVED catalog resource missing layer/capabilities', () => {
    const result = schema.safeParse({
      type: SourceType.CATALOG_RESOURCE,
      domain: Domain.RASTER,
      uniqueness: {},
      status: ResourceResolutionStatus.RESOLVED,
      layer: null,
      capabilities: null,
    });
    expect(result.success).toBe(false);
  });

  it('rejects a write-shaped source that carries no status', () => {
    const result = schema.safeParse({ type: SourceType.EXTERNAL, details: { protocol: 'XYZ', name: 'n', url: 'https://example.com' } });
    expect(result.success).toBe(false);
  });

  it('rejects an unknown type', () => {
    expect(schema.safeParse({ type: 'NOPE' }).success).toBe(false);
  });
});
