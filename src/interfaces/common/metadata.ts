import { GeoJSON } from 'geojson';
import { ProductType } from '../../enums/common/metadata/productType';
import { RecordType } from '../../enums/common/metadata/recordType';

export interface IMetadataCommonModel {
  // PROFILES COMMON FIELDS
  type: RecordType;
  classification: string;
  productName: string;
  description?: string;
  srsName?: string;
  producerName?: string;
  sensors: string[];
  region: string[];
  footprint: GeoJSON;
  productId: string;
  productType: ProductType;
}
