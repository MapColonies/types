import { OGCVectorProtocolType } from './common';
import { DemProtocolType } from './DemProtocolType';

export const ThreeDProtocolType = {
  COPC: 'COPC',
  THREE_D_TILES: '3DTiles',
  TERRAIN_QMESH: DemProtocolType.TERRAIN_QMESH,
  WFS: OGCVectorProtocolType.WFS,
} as const;
export type ThreeDProtocolType = (typeof ThreeDProtocolType)[keyof typeof ThreeDProtocolType];
