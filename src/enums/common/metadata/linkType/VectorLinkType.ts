import { VectorProtocolType } from '../protocolType/VectorProtocolType';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const VectorLinkType = {
  ...VectorProtocolType,
} as const;
export type VectorLinkType = (typeof VectorLinkType)[keyof typeof VectorLinkType];
