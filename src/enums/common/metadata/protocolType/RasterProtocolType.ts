import { OGCImageryProtocolType, OGCVectorProtocolType } from './common';

export const RasterProtocolType = {
  WMTS: OGCImageryProtocolType.WMTS,
  WMS: OGCImageryProtocolType.WMS,
  WFS: OGCVectorProtocolType.WFS,
} as const;
export type RasterProtocolType = (typeof RasterProtocolType)[keyof typeof RasterProtocolType];
