/* eslint-disable @typescript-eslint/naming-convention */
import { OGCImageryProtocolType, OGCVectorProtocolType } from './common';

export const VectorProtocolType = {
  WMTS: OGCImageryProtocolType.WMTS,
  WFS: OGCVectorProtocolType.WFS,
  VECTOR_TILES: 'VECTOR_TILES',
} as const;
export type VectorProtocolType = (typeof VectorProtocolType)[keyof typeof VectorProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
