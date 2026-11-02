/* eslint-disable @typescript-eslint/naming-convention */
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
/* eslint-enable @typescript-eslint/naming-convention */
