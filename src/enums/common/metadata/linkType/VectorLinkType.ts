/* eslint-disable @typescript-eslint/naming-convention */
import { VectorProtocolType } from '../protocolType/VectorProtocolType';

export const VectorLinkType = {
  ...VectorProtocolType,
} as const;
export type VectorLinkType = (typeof VectorLinkType)[keyof typeof VectorLinkType];
/* eslint-enable @typescript-eslint/naming-convention */
