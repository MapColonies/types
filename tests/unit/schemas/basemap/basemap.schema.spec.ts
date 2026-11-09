import { Domain } from '../../../../src/enums/common/domain';
import { SourceType } from '../../../../src/enums/common/metadata/sourceType';
import { BasemapWriteInputSchema, PersistedBasemapSchema } from '../../../../src/schemas/basemap/basemap.schema';

function baseInput(): Record<string, unknown> {
  return {
    name: 'Satellite Europe',
    thumbnail: { url: 'https://example.com/thumb.png', width: 128, height: 128 },
    isCurrent: false,
    isForPreview: false,
    layers: [
      {
        id: 'layer-1',
        order: 0,
        opacity: 1,
        source: { type: SourceType.CATALOG_RESOURCE, domain: Domain.RASTER, uniqueness: { productId: '12345', productType: 'Orthophoto' } },
      },
      {
        id: 'layer-2',
        order: 1,
        opacity: 0.7,
        source: { type: SourceType.EXTERNAL, details: { protocol: 'XYZ', name: 'Google Satellite', url: 'https://example.com/{z}/{x}/{y}' } },
      },
    ],
  };
}

describe('BasemapWriteInputSchema', () => {
  it('accepts a well-formed input', () => {
    expect(BasemapWriteInputSchema.safeParse(baseInput()).success).toBe(true);
  });

  it('rejects an empty (whitespace-only) name without trimming the stored value', () => {
    const input = { ...baseInput(), name: '   ' };
    expect(BasemapWriteInputSchema.safeParse(input).success).toBe(false);
  });

  it('does not silently trim a valid padded name', () => {
    const input = { ...baseInput(), name: '  Satellite Europe  ' };
    const result = BasemapWriteInputSchema.safeParse(input);
    expect(result.success).toBe(true);
    expect(result.success && result.data.name).toBe('  Satellite Europe  ');
  });

  it('rejects an empty thumbnail url', () => {
    const input = { ...baseInput(), thumbnail: { url: '', width: 128, height: 128 } };
    expect(BasemapWriteInputSchema.safeParse(input).success).toBe(false);
  });

  it('rejects a thumbnail with the wrong dimensions', () => {
    const input = { ...baseInput(), thumbnail: { url: 'https://example.com/t.png', width: 256, height: 256 } };
    expect(BasemapWriteInputSchema.safeParse(input).success).toBe(false);
  });

  it.each([1.5, -0.1])('rejects an out-of-range opacity (%s)', (opacity) => {
    const [firstLayer, secondLayer] = baseInput().layers as Record<string, unknown>[];
    const input = { ...baseInput(), layers: [{ ...firstLayer, opacity }, secondLayer] };
    expect(BasemapWriteInputSchema.safeParse(input).success).toBe(false);
  });

  it('rejects a negative layer order', () => {
    const [firstLayer, secondLayer] = baseInput().layers as Record<string, unknown>[];
    const input = { ...baseInput(), layers: [{ ...firstLayer, order: -1 }, secondLayer] };
    expect(BasemapWriteInputSchema.safeParse(input).success).toBe(false);
  });
});

describe('PersistedBasemapSchema', () => {
  it('accepts the write-input shape plus an id', () => {
    const result = PersistedBasemapSchema.safeParse({ ...baseInput(), id: 'generated-id' });
    expect(result.success).toBe(true);
  });

  it('rejects a persisted entry missing its id', () => {
    expect(PersistedBasemapSchema.safeParse(baseInput()).success).toBe(false);
  });
});
