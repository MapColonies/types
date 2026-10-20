/* eslint-disable @typescript-eslint/naming-convention */
export const OGCImageryProtocolType = {
  WMS: 'WMS',
  WMTS: 'WMTS',
  XYZ: 'XYZ',
  WCS: 'WCS',
} as const;
export type OGCImageryProtocolType = (typeof OGCImageryProtocolType)[keyof typeof OGCImageryProtocolType];

export const ProprietaryImageryProtocolType = {
  OSM: 'OSM',
} as const;
export type ProprietaryImageryProtocolType = (typeof ProprietaryImageryProtocolType)[keyof typeof ProprietaryImageryProtocolType];

export const OGCVectorProtocolType = {
  WFS: 'WFS',
} as const;
export type OGCVectorProtocolType = (typeof OGCVectorProtocolType)[keyof typeof OGCVectorProtocolType];

export const ProprietaryDemProtocolType = {
  TERRAIN_QMESH: 'TERRAIN_QMESH',
} as const;
export type ProprietaryDemProtocolType = (typeof ProprietaryDemProtocolType)[keyof typeof ProprietaryDemProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
