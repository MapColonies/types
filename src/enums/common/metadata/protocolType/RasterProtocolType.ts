/* eslint-disable @typescript-eslint/naming-convention */
import { OGC_ImageryProtocolType, OGC_VectorProtocolType } from './common';

export const RasterProtocolType = {
  WMTS: OGC_ImageryProtocolType.WMTS,
  WMS: OGC_ImageryProtocolType.WMS,
  WFS: OGC_VectorProtocolType.WFS,
} as const;
export type RasterProtocolType = (typeof RasterProtocolType)[keyof typeof RasterProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
