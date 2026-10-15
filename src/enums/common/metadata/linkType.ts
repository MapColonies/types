export type LinkType = RasterLinkType | ThreeDLinkType | DemLinkType | VectorLinkType;

export enum AssetLinkType {
  THUMBNAIL_S = 'THUMBNAIL_S',
  THUMBNAIL_M = 'THUMBNAIL_M',
  THUMBNAIL_L = 'THUMBNAIL_L',
  LEGEND_DOC = 'LEGEND_DOC',
  LEGEND_IMG = 'LEGEND_IMG',
}

export enum RasterLinkType {
  WMTS_KVP = 'WMTS_KVP',
  WMTS_BASE = 'WMTS_BASE',
  WMS_BASE = 'WMS_BASE',
  WMTS = 'WMTS',
  WMS = 'WMS',
  WCS = 'WCS',
  WFS = 'WFS',
  THUMBNAIL_S = 'THUMBNAIL_S',
  THUMBNAIL_M = 'THUMBNAIL_M',
  THUMBNAIL_L = 'THUMBNAIL_L',
  LEGEND_DOC = 'LEGEND_DOC',
  LEGEND_IMG = 'LEGEND_IMG',
}

export enum ThreeDLinkType {
  THREE_D_TILES = '3DTiles',
  TERRAIN_QMESH = 'TERRAIN_QMESH',
  THUMBNAIL_S = 'THUMBNAIL_S',
  THUMBNAIL_M = 'THUMBNAIL_M',
  THUMBNAIL_L = 'THUMBNAIL_L',
}

export enum DemLinkType {
  WMTS = 'WMTS',
  TERRAIN_QMESH = 'TERRAIN_QMESH',
  THUMBNAIL_S = 'THUMBNAIL_S',
  THUMBNAIL_M = 'THUMBNAIL_M',
  THUMBNAIL_L = 'THUMBNAIL_L',
}

export enum VectorLinkType {
  WMTS = 'WMTS',
  WFS = 'WFS',
}
