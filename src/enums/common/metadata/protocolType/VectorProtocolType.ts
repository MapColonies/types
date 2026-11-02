/* eslint-disable @typescript-eslint/naming-convention */
import { OGC_ImageryProtocolType, OGC_VectorProtocolType, OPEN_VectorProtocolType } from './common';

export const VectorProtocolType = {
  WMTS: OGC_ImageryProtocolType.WMTS,
  WFS: OGC_VectorProtocolType.WFS,
  VECTOR_TILES: OPEN_VectorProtocolType.VECTOR_TILES,
} as const;
export type VectorProtocolType = (typeof VectorProtocolType)[keyof typeof VectorProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
