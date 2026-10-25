/* eslint-disable @typescript-eslint/naming-convention */
import { LegendLinkType, ThumbnailLinkType } from './metadata/linkType';

export const ArtifactDEMType = {
  MODEL: 'MODEL',
  METADATA: 'METADATA',
  ROI: 'ROI',
  ...LegendLinkType,
} as const;
export type ArtifactDEMType = (typeof ArtifactDEMType)[keyof typeof ArtifactDEMType];

export const ArtifactRasterType = {
  GPKG: 'GPKG',
  METADATA: 'METADATA',
  ...LegendLinkType,
  ...ThumbnailLinkType,
} as const;
export type ArtifactRasterType = (typeof ArtifactRasterType)[keyof typeof ArtifactRasterType];

export const Artifact3DType = {
  MODEL_3D: 'MODEL_3D',
  METADATA: 'METADATA',
  ...ThumbnailLinkType,
} as const;
export type Artifact3DType = (typeof Artifact3DType)[keyof typeof Artifact3DType];
/* eslint-enable @typescript-eslint/naming-convention */
