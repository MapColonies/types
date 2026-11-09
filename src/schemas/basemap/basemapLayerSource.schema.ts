/* eslint-disable @typescript-eslint/naming-convention, import/exports-last */
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

export const ExternalLayerSourceInputSchema = z.object({
  type: z.literal(SourceType.EXTERNAL),
  details: ExternalLayerDetailsSchema,
});
export type ExternalLayerSourceInput = z.infer<typeof ExternalLayerSourceInputSchema>;

export const BasemapLayerSourceInputSchema = z.discriminatedUnion('type', [CatalogResourceLayerSourceSchema, ExternalLayerSourceInputSchema]);
export type BasemapLayerSourceInput = z.infer<typeof BasemapLayerSourceInputSchema>;

export const ExternalLayerSourceOutputSchema = z.object({
  type: z.literal(SourceType.EXTERNAL),
  status: z.literal(ResourceResolutionStatus.RESOLVED),
  details: ExternalLayerDetailsSchema,
});
export type ExternalLayerSourceOutput = z.infer<typeof ExternalLayerSourceOutputSchema>;

export interface ResolvedCatalogResourceLayerSource<TLayer = unknown, TCapabilities = unknown> {
  type: typeof SourceType.CATALOG_RESOURCE;
  domain: typeof Domain.RASTER;
  uniqueness: RasterUniqueness;
  status: typeof ResourceResolutionStatus.RESOLVED;
  layer: TLayer;
  capabilities: TCapabilities;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function buildResolvedCatalogResourceLayerSourceSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
) {
  return z.object({
    type: z.literal(SourceType.CATALOG_RESOURCE),
    domain: z.literal(Domain.RASTER),
    uniqueness: RasterUniquenessSchema,
    status: z.literal(ResourceResolutionStatus.RESOLVED),
    layer: layerSchema,
    capabilities: capabilitiesSchema,
  });
}

export function createResolvedCatalogResourceLayerSourceSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
): z.ZodType<ResolvedCatalogResourceLayerSource<z.infer<TLayer>, z.infer<TCapabilities>>> {
  return buildResolvedCatalogResourceLayerSourceSchema(layerSchema, capabilitiesSchema) as unknown as z.ZodType<
    ResolvedCatalogResourceLayerSource<z.infer<TLayer>, z.infer<TCapabilities>>
  >;
}

export const UnresolvedCatalogResourceLayerSourceSchema = z.object({
  type: z.literal(SourceType.CATALOG_RESOURCE),
  domain: z.literal(Domain.RASTER),
  uniqueness: RasterUniquenessSchema,
  status: z.literal(ResourceResolutionStatus.UNRESOLVED),
  layer: z.null(),
  capabilities: z.null(),
});
export type UnresolvedCatalogResourceLayerSource = z.infer<typeof UnresolvedCatalogResourceLayerSourceSchema>;

export type CatalogResourceLayerSourceOutput<TLayer = unknown, TCapabilities = unknown> =
  | ResolvedCatalogResourceLayerSource<TLayer, TCapabilities>
  | UnresolvedCatalogResourceLayerSource;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function buildCatalogResourceLayerSourceOutputSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
) {
  return z.discriminatedUnion('status', [
    buildResolvedCatalogResourceLayerSourceSchema(layerSchema, capabilitiesSchema),
    UnresolvedCatalogResourceLayerSourceSchema,
  ]);
}

export function createCatalogResourceLayerSourceOutputSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
): z.ZodType<CatalogResourceLayerSourceOutput<z.infer<TLayer>, z.infer<TCapabilities>>> {
  return buildCatalogResourceLayerSourceOutputSchema(layerSchema, capabilitiesSchema) as unknown as z.ZodType<
    CatalogResourceLayerSourceOutput<z.infer<TLayer>, z.infer<TCapabilities>>
  >;
}

export type BasemapLayerSourceOutput<TLayer = unknown, TCapabilities = unknown> =
  | CatalogResourceLayerSourceOutput<TLayer, TCapabilities>
  | ExternalLayerSourceOutput;

export function createBasemapLayerSourceOutputSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
): z.ZodType<BasemapLayerSourceOutput<z.infer<TLayer>, z.infer<TCapabilities>>> {
  return z.union([
    buildCatalogResourceLayerSourceOutputSchema(layerSchema, capabilitiesSchema),
    ExternalLayerSourceOutputSchema,
  ]) as unknown as z.ZodType<BasemapLayerSourceOutput<z.infer<TLayer>, z.infer<TCapabilities>>>;
}
