export enum ProtocolType {
  WMS = 'WMS',
  WMTS = 'WMTS',
  XYZ = 'XYZ',
  OSM = 'OSM',
  WFS = 'WFS',
  WCS = 'WCS',
  COPC = 'COPC',
  THREE_D_TILES = '3DTiles',
  TERRAIN_QMESH = 'TERRAIN_QMESH',
  VECTOR_TILES = 'VECTOR_TILES',
}

export const PROTOCOL_SCHEMAS = {
  [ProtocolType.WMS]: {
    mandatory:'http://www.opengis.net/wms_req',
    optional: 'http://www.opengis.net/wms_opt',
  },
  [ProtocolType.WMTS]: 'http://www.opengis.net/wmts',
  [ProtocolType.XYZ]: 'http://www.opengis.net/xyz',
  [ProtocolType.OSM]: 'http://www.opengis.net/osm',
  [ProtocolType.WFS]: 'http://www.opengis.net/wfs',
  [ProtocolType.WCS]: 'http://www.opengis.net/wcs',
  [ProtocolType.COPC]: 'http://www.opengis.net/copc',
  [ProtocolType.THREE_D_TILES]: 'http://www.opengis.net/3dtiles',
  [ProtocolType.TERRAIN_QMESH]: 'http://www.opengis.net/terrain_qmesh',
  [ProtocolType.VECTOR_TILES]: 'http://www.opengis.net/vector_tiles',
}
