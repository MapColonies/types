/* eslint-disable @typescript-eslint/naming-convention */
import { RasterProtocolType } from '../protocolType/RasterProtocolType';
import { AssetLinkType } from './common';

export const RasterLinkType = {
  WMTS_KVP: 'WMTS_KVP',
  WMTS_BASE: 'WMTS_BASE',
  WMS_BASE: 'WMS_BASE',
  ...RasterProtocolType,
  ...AssetLinkType,
} as const;
export type RasterLinkType = (typeof RasterLinkType)[keyof typeof RasterLinkType];
/* eslint-enable @typescript-eslint/naming-convention */
