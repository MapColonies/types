export const ImageryProtocolType = {
  WMS: 'WMS',
  WMTS: 'WMTS',
} as const;
export type ImageryProtocolType = (typeof ImageryProtocolType)[keyof typeof ImageryProtocolType];

export const UnsupportedProtocolType = {
  XYZ: 'XYZ',
  OSM: 'OSM',
} as const;
export type UnsupportedProtocolType = (typeof UnsupportedProtocolType)[keyof typeof UnsupportedProtocolType];

export const VectorProtocolType = {
  WMTS: ImageryProtocolType.WMTS,
  WFS: 'WFS',
  VECTOR_TILES: 'VECTOR_TILES',
} as const;
export type VectorProtocolType = (typeof VectorProtocolType)[keyof typeof VectorProtocolType];

export const DemProtocolType = {
  WMTS: ImageryProtocolType.WMTS,
  TERRAIN_QMESH: 'TERRAIN_QMESH',
  WFS: VectorProtocolType.WFS,
  WCS: 'WCS',
} as const;
export type DemProtocolType = (typeof DemProtocolType)[keyof typeof DemProtocolType];

export const ThreeDProtocolType = {
  COPC: 'COPC',
  THREE_D_TILES: '3DTiles',
  TERRAIN_QMESH: DemProtocolType.TERRAIN_QMESH,
  WFS: VectorProtocolType.WFS,
} as const;
export type ThreeDProtocolType = (typeof ThreeDProtocolType)[keyof typeof ThreeDProtocolType];

export const RasterProtocolType = {
  ...ImageryProtocolType,
  WFS: VectorProtocolType.WFS,
} as const;
export type RasterProtocolType = (typeof RasterProtocolType)[keyof typeof RasterProtocolType];

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProtocolType = {
  ...RasterProtocolType,
  ...ThreeDProtocolType,
  ...DemProtocolType,
  ...VectorProtocolType,
  ...UnsupportedProtocolType,
} as const;
export type ProtocolType = RasterProtocolType | ThreeDProtocolType | DemProtocolType | VectorProtocolType | UnsupportedProtocolType;
