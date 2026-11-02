/* eslint-disable @typescript-eslint/naming-convention */
import { ThreeDProtocolType } from '../protocolType/ThreeDProtocolType';
import { ThumbnailLinkType } from './common';

export const ThreeDLinkType = {
  ...ThreeDProtocolType,
  ...ThumbnailLinkType,
} as const;
export type ThreeDLinkType = (typeof ThreeDLinkType)[keyof typeof ThreeDLinkType];
/* eslint-enable @typescript-eslint/naming-convention */
