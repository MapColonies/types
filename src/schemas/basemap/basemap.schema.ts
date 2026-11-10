/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';
import { type BasemapLayerSourceOutput, BasemapLayerSourceInputSchema, createBasemapLayerSourceOutputSchema } from './basemapLayerSource.schema';

const THUMBNAIL_DIMENSION_PIXELS = 128;
const MIN_OPACITY = 0;
const MAX_OPACITY = 1;
const MIN_ORDER = 0;

const BasemapLayerBaseSchema = z.object({
  id: z.string(),
  order: z.number().int().min(MIN_ORDER),
  opacity: z.number().min(MIN_OPACITY).max(MAX_OPACITY),
  shouldBeUsedInModelDraping: z.boolean().optional(),
});

export const BasemapThumbnailSchema = z.object({
  url: z.string().refine((value) => value.trim().length > 0, {
    message: 'thumbnail.url must not be empty - upload a thumbnail via POST /basemaps/thumbnails first',
  }),
  width: z.literal(THUMBNAIL_DIMENSION_PIXELS),
  height: z.literal(THUMBNAIL_DIMENSION_PIXELS),
});
export type BasemapThumbnail = z.infer<typeof BasemapThumbnailSchema>;

export const BasemapLayerInputSchema = BasemapLayerBaseSchema.extend({
  source: BasemapLayerSourceInputSchema,
});
export type BasemapLayerInput = z.infer<typeof BasemapLayerInputSchema>;

export const BasemapWriteInputSchema = z.object({
  name: z.string().refine((value) => value.trim().length > 0, { message: 'name must not be empty' }),
  thumbnail: BasemapThumbnailSchema,
  isCurrent: z.boolean(),
  isForPreview: z.boolean(),
  layers: z.array(BasemapLayerInputSchema),
});
export type BasemapWriteInput = z.infer<typeof BasemapWriteInputSchema>;

export const PersistedBasemapSchema = BasemapWriteInputSchema.extend({
  id: z.string(),
});
export type PersistedBasemap = z.infer<typeof PersistedBasemapSchema>;

export interface BasemapLayerOutput<TLayer = unknown, TCapabilities = unknown> extends Omit<BasemapLayerInput, 'source'> {
  source: BasemapLayerSourceOutput<TLayer, TCapabilities>;
}

export function createBasemapLayerOutputSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
): z.ZodType<BasemapLayerOutput<z.infer<TLayer>, z.infer<TCapabilities>>> {
  return BasemapLayerBaseSchema.extend({
    source: createBasemapLayerSourceOutputSchema(layerSchema, capabilitiesSchema),
  });
}

export interface Basemap<TLayer = unknown, TCapabilities = unknown> extends Omit<PersistedBasemap, 'layers'> {
  layers: BasemapLayerOutput<TLayer, TCapabilities>[];
}

export function createBasemapSchema<TLayer extends z.ZodTypeAny, TCapabilities extends z.ZodTypeAny>(
  layerSchema: TLayer,
  capabilitiesSchema: TCapabilities
): z.ZodType<Basemap<z.infer<TLayer>, z.infer<TCapabilities>>> {
  return PersistedBasemapSchema.extend({
    layers: z.array(createBasemapLayerOutputSchema(layerSchema, capabilitiesSchema)),
  });
}
