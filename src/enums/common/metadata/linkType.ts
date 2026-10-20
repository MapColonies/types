import { DemLinkType } from './linkType/DemLinkType';
import { RasterLinkType } from './linkType/RasterLinkType';
import { ThreeDLinkType } from './linkType/ThreeDLinkType';
import { VectorLinkType } from './linkType/VectorLinkType';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LinkType = {
  ...RasterLinkType,
  ...ThreeDLinkType,
  ...DemLinkType,
  ...VectorLinkType,
} as const;
export type LinkType =
  | import('./linkType/RasterLinkType').RasterLinkType
  | import('./linkType/ThreeDLinkType').ThreeDLinkType
  | import('./linkType/DemLinkType').DemLinkType
  | import('./linkType/VectorLinkType').VectorLinkType;

export * from './linkType/common';
export * from './linkType/DemLinkType';
export * from './linkType/RasterLinkType';
export * from './linkType/ThreeDLinkType';
export * from './linkType/VectorLinkType';
