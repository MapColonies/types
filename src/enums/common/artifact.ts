export enum ArtifactDEMType {
  MODEL = 'MODEL',
  METADATA = 'METADATA',
  ROI = 'ROI',
  LEGEND = 'LEGEND',
}

/**
 * Used for identifing raster artifact
 * @property THUMBNAILS_SMALL pixel size:
 * @property THUMBNAILS_MEDIUM pixel size:
 * @property THUMBNAILS_LARGE pixel size:
 */
export enum ArtifactRasterType {
  GPKG = 'GPKG',
  LEGEND = 'LEGEND',
  METADATA = 'METADATA',
  THUMBNAILS_SMALL = 'THUMBNAILS_SMALL',
  THUMBNAILS_MEDIUM = 'THUMBNAILS_MEDIUM',
  THUMBNAILS_LARGE = 'THUMBNAILS_LARGE',
}

/**
 * Used for identifing 3D artifact
 * @property THUMBNAILS_SMALL pixel size:
 * @property THUMBNAILS_MEDIUM pixel size:
 * @property THUMBNAILS_LARGE pixel size:
 */
export enum Artifact3DType {
  MODEL_3D = 'MODEL_3D',
  METADATA = 'METADATA',
  THUMBNAILS_SMALL = 'THUMBNAILS_SMALL',
  THUMBNAILS_MEDIUM = 'THUMBNAILS_MEDIUM',
  THUMBNAILS_LARGE = 'THUMBNAILS_LARGE',
}
