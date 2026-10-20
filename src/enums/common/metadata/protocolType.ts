import { OGCImageryProtocolType, ProprietaryImageryProtocolType } from './protocolType/common';
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
  ...OGCImageryProtocolType,
  ...ProprietaryImageryProtocolType,
} as const;
export type ProtocolType = 
  import('./protocolType/RasterProtocolType').RasterProtocolType |
  import('./protocolType/ThreeDProtocolType').ThreeDProtocolType |
  import('./protocolType/DemProtocolType').DemProtocolType |
  import('./protocolType/VectorProtocolType').VectorProtocolType |
  import('./protocolType/common').OGCImageryProtocolType |
  import('./protocolType/common').ProprietaryImageryProtocolType;

export { OGCImageryProtocolType, OGCVectorProtocolType, ProprietaryImageryProtocolType } from './protocolType/common';
export { DemProtocolType } from './protocolType/DemProtocolType';
export { RasterProtocolType } from './protocolType/RasterProtocolType';
export { ThreeDProtocolType } from './protocolType/ThreeDProtocolType';
export { VectorProtocolType } from './protocolType/VectorProtocolType';
