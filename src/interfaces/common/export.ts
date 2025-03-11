import { Artifact3DType, ArtifactDEMType, ArtifactRasterType } from '../../enums/common/artifact';

export type ArtifactType = ArtifactDEMType | ArtifactRasterType | Artifact3DType;

export interface Artifact {
  name: string;
  type: ArtifactType;
  url: string;
  size: number;
  sha256?: string;
}
