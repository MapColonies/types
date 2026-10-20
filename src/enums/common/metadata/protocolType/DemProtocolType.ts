/* eslint-disable @typescript-eslint/naming-convention */
import { OGCImageryProtocolType, OGCVectorProtocolType, ProprietaryDemProtocolType } from './common';

export const DemProtocolType = {
  WMTS: OGCImageryProtocolType.WMTS,
  TERRAIN_QMESH: ProprietaryDemProtocolType.TERRAIN_QMESH,
  WFS: OGCVectorProtocolType.WFS,
  WCS: OGCImageryProtocolType.WCS,
} as const;
export type DemProtocolType = (typeof DemProtocolType)[keyof typeof DemProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
