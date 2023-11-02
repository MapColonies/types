/**
 * Used for identifing DEM artifact
 * @property LEGEND PDF
 * @property THUMBNAILS_SMALL pixel size: 128 x 128
 * @property THUMBNAILS_MEDIUM pixel size: 400 x 400
 * @property THUMBNAILS_LARGE pixel size: 800 x 800
 */
export enum ArtifactDEMType {
  MODEL = 'MODEL',
  METADATA = 'METADATA',
  ROI = 'ROI',
  LEGEND = 'LEGEND',
}

/**
 * Used for identifing Raster artifact
 * @property LEGEND PDF
 * @property THUMBNAILS_SMALL pixel size: 128 x 128
 * @property THUMBNAILS_MEDIUM pixel size: 400 x 400
 * @property THUMBNAILS_LARGE pixel size: 800 x 800
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
 * @property LEGEND PDF
 * @property THUMBNAILS_SMALL pixel size: 128 x 128
 * @property THUMBNAILS_MEDIUM pixel size: 400 x 400
 * @property THUMBNAILS_LARGE pixel size: 800 x 800
 */
export enum Artifact3DType {
  MODEL_3D = 'MODEL_3D',
  METADATA = 'METADATA',
  THUMBNAILS_SMALL = 'THUMBNAILS_SMALL',
  THUMBNAILS_MEDIUM = 'THUMBNAILS_MEDIUM',
  THUMBNAILS_LARGE = 'THUMBNAILS_LARGE',
}
