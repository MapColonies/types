/* eslint-disable @typescript-eslint/naming-convention */
import { OGCVectorProtocolType, ProprietaryDemProtocolType } from './common';

export const ThreeDProtocolType = {
  COPC: 'COPC',
  THREE_D_TILES: '3DTiles',
  TERRAIN_QMESH: ProprietaryDemProtocolType.TERRAIN_QMESH,
  WFS: OGCVectorProtocolType.WFS,
} as const;
export type ThreeDProtocolType = (typeof ThreeDProtocolType)[keyof typeof ThreeDProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
