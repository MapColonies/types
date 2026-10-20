/* eslint-disable @typescript-eslint/naming-convention */

/*
Category Reference Guide:

OGC: Open Geospatial Consortium Certified Open Industry Standard.
STD: Ubiquitous/De Facto Web Specification Standard.
OPEN: Open-Source or Open-Access Specification Format.
PROPRIETARY: Proprietary Corporate API / Enterprise Network Service Protocol.
INTERNAL: Embedded Cesium Core Debugging or Algorithmic Runtime Component.
*/

export const OGC_ImageryProtocolType = {
  WMS: 'WMS',
  WMTS: 'WMTS',
  XYZ: 'XYZ',
  WCS: 'WCS',
} as const;
export type OGC_ImageryProtocolType = (typeof OGC_ImageryProtocolType)[keyof typeof OGC_ImageryProtocolType];

export const PROPRIETARY_ImageryProtocolType = {
  OSM: 'OSM',
  MAPBOX_STYLE: 'MAPBOX_STYLE',
  BING_MAPS: 'BING_MAPS',
} as const;
export type PROPRIETARY_ImageryProtocolType = (typeof PROPRIETARY_ImageryProtocolType)[keyof typeof PROPRIETARY_ImageryProtocolType];

export const OGC_VectorProtocolType = {
  WFS: 'WFS',
} as const;
export type OGC_VectorProtocolType = (typeof OGC_VectorProtocolType)[keyof typeof OGC_VectorProtocolType];

export const OGC_ThreeDProtocolType = {
  THREE_D_TILES: '3DTiles',
} as const;
export type OGC_ThreeDProtocolType = (typeof OGC_ThreeDProtocolType)[keyof typeof OGC_ThreeDProtocolType];

export const OPEN_ThreeDProtocolType = {
  COPC: 'COPC',
} as const;
export type OPEN_ThreeDProtocolType = (typeof OPEN_ThreeDProtocolType)[keyof typeof OPEN_ThreeDProtocolType];

export const PROPRIETARY_DemProtocolType = {
  TERRAIN_QMESH: 'TERRAIN_QMESH',
} as const;
export type PROPRIETARY_DemProtocolType = (typeof PROPRIETARY_DemProtocolType)[keyof typeof PROPRIETARY_DemProtocolType];
/* eslint-enable @typescript-eslint/naming-convention */
