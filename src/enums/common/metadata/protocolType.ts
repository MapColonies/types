import { OGC_ImageryProtocolType, PROPRIETARY_ImageryProtocolType } from './protocolType/common';
import { DemProtocolType } from './protocolType/DemProtocolType';
import { RasterProtocolType } from './protocolType/RasterProtocolType';
import { ThreeDProtocolType } from './protocolType/ThreeDProtocolType';
import { VectorProtocolType } from './protocolType/VectorProtocolType';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProtocolType = {
  ...RasterProtocolType,
  ...ThreeDProtocolType,
  ...DemProtocolType,
  ...VectorProtocolType,
  ...OGC_ImageryProtocolType,
  ...PROPRIETARY_ImageryProtocolType,
} as const;
export type ProtocolType =
  | import('./protocolType/RasterProtocolType').RasterProtocolType
  | import('./protocolType/ThreeDProtocolType').ThreeDProtocolType
  | import('./protocolType/DemProtocolType').DemProtocolType
  | import('./protocolType/VectorProtocolType').VectorProtocolType
  | import('./protocolType/common').OGC_ImageryProtocolType
  | import('./protocolType/common').PROPRIETARY_ImageryProtocolType;

export * from './protocolType/common';
export * from './protocolType/DemProtocolType';
export * from './protocolType/RasterProtocolType';
export * from './protocolType/ThreeDProtocolType';
export * from './protocolType/VectorProtocolType';
