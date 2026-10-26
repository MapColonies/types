/* eslint-disable @typescript-eslint/naming-convention */
import { OGC_ThreeDProtocolType, OGC_VectorProtocolType, OPEN_ThreeDProtocolType, PROPRIETARY_DemProtocolType } from './common';

export const ThreeDProtocolType = {
  COPC: OPEN_ThreeDProtocolType.COPC,
  THREE_D_TILES: OGC_ThreeDProtocolType.THREE_D_TILES,
  TERRAIN_QMESH: PROPRIETARY_DemProtocolType.TERRAIN_QMESH,
  WFS: OGC_VectorProtocolType.WFS,
} as const;
export type ThreeDProtocolType = (typeof ThreeDProtocolType)[keyof typeof ThreeDProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
