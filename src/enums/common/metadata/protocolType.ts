import {
  OGC_ImageryProtocolType,
  OGC_ThreeDProtocolType,
  OGC_VectorProtocolType,
  OPEN_ThreeDProtocolType,
  OPEN_VectorProtocolType,
  PROPRIETARY_DemProtocolType,
  PROPRIETARY_ImageryProtocolType,
} from './protocolType/common';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProtocolType = {
  ...OGC_ImageryProtocolType,
  ...PROPRIETARY_ImageryProtocolType,
  ...OGC_VectorProtocolType,
  ...OPEN_VectorProtocolType,
  ...OGC_ThreeDProtocolType,
  ...OPEN_ThreeDProtocolType,
  ...PROPRIETARY_DemProtocolType,
} as const;
export type ProtocolType =
  | import('./protocolType/common').OGC_ImageryProtocolType
  | import('./protocolType/common').PROPRIETARY_ImageryProtocolType
  | import('./protocolType/common').OGC_VectorProtocolType
  | import('./protocolType/common').OPEN_VectorProtocolType
  | import('./protocolType/common').OGC_ThreeDProtocolType
  | import('./protocolType/common').OPEN_ThreeDProtocolType
  | import('./protocolType/common').PROPRIETARY_DemProtocolType;

export * from './protocolType/common';
