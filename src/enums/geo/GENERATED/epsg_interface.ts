/* eslint-disable naming-convention  */
export interface Epsg {
  code: string;
  kind: Kind;
  name: string;
  wkt: null | string;
  proj4: null | string;
  bbox: number[];
  unit: Unit | null;
  area: null | string;
  accuracy: number | null;
}

export enum Kind {
  CRSCompoundcrs = 'CRS-COMPOUNDCRS',
  CRSDrvdcrs = 'CRS-DRVDCRS',
  CRSEngcrs = 'CRS-ENGCRS',
  CRSGcencrs = 'CRS-GCENCRS',
  CRSGeog3Dcrs = 'CRS-GEOG3DCRS',
  CRSGeogcrs = 'CRS-GEOGCRS',
  CRSProjcrs = 'CRS-PROJCRS',
  CRSVertcrs = 'CRS-VERTCRS',
}

export enum Unit {
  Bin = '(bin)',
  BritishChainSears1922 = 'British chain (Sears 1922)',
  BritishChainSears1922Truncated = 'British chain (Sears 1922 truncated)',
  BritishFoot1936 = 'British foot (1936)',
  BritishFootSears1922 = 'British foot (Sears 1922)',
  BritishYardSears1922 = 'British yard (Sears 1922)',
  ClarkeSFoot = "Clarke's foot",
  ClarkeSLink = "Clarke's link",
  ClarkeSYard = "Clarke's yard",
  DegreeSupplierToDefineRepresentation = 'degree (supplier to define representation)',
  Foot = 'foot',
  GermanLegalMetre = 'German legal metre',
  GoldCoastFoot = 'Gold Coast foot',
  Grad = 'grad',
  IndianYard = 'Indian yard',
  Kilometre = 'kilometre',
  Link = 'link',
  Metre = 'metre',
  USSurveyFoot = 'US survey foot',
}

/* eslint-disable naming-convention  */
