/* eslint-disable @typescript-eslint/naming-convention */
import {
  OGC_ImageryProtocolType,
  OGC_VectorProtocolType,
  PROPRIETARY_DemProtocolType
} from './common';

export const DemProtocolType = {
  WMTS: OGC_ImageryProtocolType.WMTS,
  TERRAIN_QMESH: PROPRIETARY_DemProtocolType.TERRAIN_QMESH,
  WFS: OGC_VectorProtocolType.WFS,
  WCS: OGC_ImageryProtocolType.WCS,
} as const;
export type DemProtocolType = (typeof DemProtocolType)[keyof typeof DemProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
