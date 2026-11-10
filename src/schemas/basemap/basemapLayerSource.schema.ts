/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';
import { SourceType } from '../../enums/common/metadata/sourceType';
import { Domain } from '../../enums/common/domain';
import { ResourceResolutionStatus } from '../../enums/basemap/resourceResolutionStatus';

export const RasterUniquenessSchema = z
  .object({
    productId: z.string().nullish().describe('Raster catalog product id'),
    productType: z.string().nullish().describe('Raster product type (wire values as in @map-colonies/types, e.g. Orthophoto)'),
  })
  .describe('Identifies a raster catalog product by productId + productType');
export type RasterUniqueness = z.infer<typeof RasterUniquenessSchema>;

export const ExternalLayerDetailsSchema = z
  .object({
    protocol: z.string().describe('Serving protocol of an external layer'),
    name: z.string().refine((value) => value.trim().length > 0, { message: 'details.name must not be empty' }),
    url: z.string().refine((value) => value.trim().length > 0, { message: 'details.url must not be empty' }),
  })
  .passthrough();
export type ExternalLayerDetails = z.infer<typeof ExternalLayerDetailsSchema>;

export const CatalogResourceLayerSourceSchema = z.object({
  type: z.literal(SourceType.CATALOG_RESOURCE),
  domain: z.literal(Domain.RASTER),
  uniqueness: RasterUniquenessSchema,
});
export type CatalogResourceLayerSource = z.infer<typeof CatalogResourceLayerSourceSchema>;

export const ExternalLayerSourceSchema = z.object({
  type: z.literal(SourceType.EXTERNAL),
  details: ExternalLayerDetailsSchema,
});
export type ExternalLayerSource = z.infer<typeof ExternalLayerSourceSchema>;

export const BasemapLayerSourceInputSchema = z.discriminatedUnion('type', [CatalogResourceLayerSourceSchema, ExternalLayerSourceSchema]);
export type BasemapLayerSourceInput = z.infer<typeof BasemapLayerSourceInputSchema>;

// A read source is the write source plus the outcome of resolving it; external sources need no catalog lookup, so they are always RESOLVED.
export type BasemapLayerSourceOutput<TLayer = unknown, TCapabilities = unknown> =
  | (CatalogResourceLayerSource & { status: typeof ResourceResolutionStatus.RESOLVED; layer: TLayer; capabilities: TCapabilities })
  | (CatalogResourceLayerSource & { status: typeof ResourceResolutionStatus.UNRESOLVED; layer: null; capabilities: null })
  | (ExternalLayerSource & { status: typeof ResourceResolutionStatus.RESOLVED });

export function createBasemapLayerSourceOutputSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
): z.ZodType<BasemapLayerSourceOutput<z.infer<TLayer>, z.infer<TCapabilities>>> {
  const resolved = z.literal(ResourceResolutionStatus.RESOLVED);
  const unresolved = z.literal(ResourceResolutionStatus.UNRESOLVED);

  return z.union([
    CatalogResourceLayerSourceSchema.extend({ status: resolved, layer: layerSchema, capabilities: capabilitiesSchema }),
    CatalogResourceLayerSourceSchema.extend({ status: unresolved, layer: z.null(), capabilities: z.null() }),
    ExternalLayerSourceSchema.extend({ status: resolved }),
  ]) as unknown as z.ZodType<BasemapLayerSourceOutput<z.infer<TLayer>, z.infer<TCapabilities>>>;
}
