import { DemProtocolType } from '../protocolType/DemProtocolType';
import { ThumbnailLinkType } from './common';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DemLinkType = {
  ...DemProtocolType,
  ...ThumbnailLinkType,
  DOWNLOAD: 'DOWNLOAD',
} as const;
export type DemLinkType = (typeof DemLinkType)[keyof typeof DemLinkType];
