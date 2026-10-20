/* eslint-disable @typescript-eslint/naming-convention */
import { DemProtocolType } from '../protocolType/DemProtocolType';
import { ThumbnailLinkType } from './common';

export const DemLinkType = {
  ...DemProtocolType,
  ...ThumbnailLinkType,
  DOWNLOAD: 'DOWNLOAD',
} as const;
export type DemLinkType = (typeof DemLinkType)[keyof typeof DemLinkType];
/* eslint-enable @typescript-eslint/naming-convention */
