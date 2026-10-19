import { DemProtocolType, RasterProtocolType, ThreeDProtocolType, VectorProtocolType } from './protocolType';

export const ThumbnailLinkType = {
  THUMBNAIL_S: 'THUMBNAIL_S',
  THUMBNAIL_M: 'THUMBNAIL_M',
  THUMBNAIL_L: 'THUMBNAIL_L',
} as const;
export type ThumbnailLinkType = (typeof ThumbnailLinkType)[keyof typeof ThumbnailLinkType];

export const LegendLinkType = {
  LEGEND_DOC: 'LEGEND_DOC',
  LEGEND_IMG: 'LEGEND_IMG',
} as const;
export type LegendLinkType = (typeof LegendLinkType)[keyof typeof LegendLinkType];

export const AssetLinkType = {
  ...ThumbnailLinkType,
  ...LegendLinkType,
} as const;
export type AssetLinkType = (typeof AssetLinkType)[keyof typeof AssetLinkType];

export const RasterLinkType = {
  WMTS_KVP: 'WMTS_KVP',
  WMTS_BASE: 'WMTS_BASE',
  WMS_BASE: 'WMS_BASE',
  WMTS: RasterProtocolType.WMTS,
  WMS: RasterProtocolType.WMS,
  WFS: RasterProtocolType.WFS,
  ...AssetLinkType,
} as const;
export type RasterLinkType = (typeof RasterLinkType)[keyof typeof RasterLinkType];

export const ThreeDLinkType = {
  ...ThreeDProtocolType,
  ...ThumbnailLinkType,
  DOWNLOAD: 'DOWNLOAD',
} as const;
export type ThreeDLinkType = (typeof ThreeDLinkType)[keyof typeof ThreeDLinkType];

export const DemLinkType = {
  ...DemProtocolType,
  ...ThumbnailLinkType,
} as const;
export type DemLinkType = (typeof DemLinkType)[keyof typeof DemLinkType];

export const VectorLinkType = {
  ...VectorProtocolType,
} as const;
export type VectorLinkType = (typeof VectorLinkType)[keyof typeof VectorLinkType];

export const LinkType = {
  ...RasterLinkType,
  ...ThreeDLinkType,
  ...DemLinkType,
  ...VectorLinkType,
} as const;
export type LinkType = RasterLinkType | ThreeDLinkType | DemLinkType | VectorLinkType;
