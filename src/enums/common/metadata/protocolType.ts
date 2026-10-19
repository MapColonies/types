export enum RasterProtocolType {
  WMS = 'WMS',
  WMTS = 'WMTS',
  XYZ = 'XYZ',
  OSM = 'OSM',
  WFS = 'WFS',
}

export enum ThreeDProtocolType {
  COPC = 'COPC',
  THREE_D_TILES = '3DTiles',
  TERRAIN_QMESH = 'TERRAIN_QMESH',
  WFS = 'WFS',
}

export enum DemProtocolType {
  WMTS = 'WMTS',
  TERRAIN_QMESH = 'TERRAIN_QMESH',
  WFS = 'WFS',
  WCS = 'WCS',
}

export enum VectorProtocolType {
  WMTS = 'WMTS',
  WFS = 'WFS',
  VECTOR_TILES = 'VECTOR_TILES',
}

export const ProtocolType = {
  ...RasterProtocolType,
  ...ThreeDProtocolType,
  ...DemProtocolType,
  ...VectorProtocolType,
} as const;
/* eslint-disable @typescript-eslint/naming-convention */
export type ProtocolType = RasterProtocolType | ThreeDProtocolType | DemProtocolType | VectorProtocolType;
/* eslint-enable @typescript-eslint/naming-convention */
