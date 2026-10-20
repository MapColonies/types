import { ThreeDProtocolType } from '../protocolType/ThreeDProtocolType';
import { ThumbnailLinkType } from './common';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ThreeDLinkType = {
  ...ThreeDProtocolType,
  ...ThumbnailLinkType,
} as const;
export type ThreeDLinkType = (typeof ThreeDLinkType)[keyof typeof ThreeDLinkType];
