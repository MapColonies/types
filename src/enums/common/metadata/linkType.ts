import { ProtocolType } from './protocolType';

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
  WMTS = ProtocolType.WMTS,
  WMS = ProtocolType.WMS,
  WCS = ProtocolType.WCS,
  WFS = ProtocolType.WFS,
  THUMBNAIL_S = AssetLinkType.THUMBNAIL_S,
  THUMBNAIL_M = AssetLinkType.THUMBNAIL_M,
  THUMBNAIL_L = AssetLinkType.THUMBNAIL_L,
  LEGEND_DOC = AssetLinkType.LEGEND_DOC,
  LEGEND_IMG = AssetLinkType.LEGEND_IMG,
}

export enum ThreeDLinkType {
  THREE_D_TILES = '3DTiles',
  TERRAIN_QMESH = 'TERRAIN_QMESH',
  THUMBNAIL_S = AssetLinkType.THUMBNAIL_S,
  THUMBNAIL_M = AssetLinkType.THUMBNAIL_M,
  THUMBNAIL_L = AssetLinkType.THUMBNAIL_L,
}

export enum DemLinkType {
  WMTS = ProtocolType.WMTS,
  TERRAIN_QMESH = ProtocolType.TERRAIN_QMESH,
  THUMBNAIL_S = AssetLinkType.THUMBNAIL_S,
  THUMBNAIL_M = AssetLinkType.THUMBNAIL_M,
  THUMBNAIL_L = AssetLinkType.THUMBNAIL_L,
}

export enum VectorLinkType {
  WMTS = ProtocolType.WMTS,
  WFS = ProtocolType.WFS,
}
