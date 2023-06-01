import * as epsg_all from '../../../node_modules/epsg-index/all.json';
import { EpsgCode } from './GENERATED/epsg_codes_type';
import { Epsg } from './GENERATED/epsg_interface';

export * from './GENERATED/epsg_interface';
export * from './GENERATED/epsg_codes_type';
export const EPSGDATA = epsg_all as unknown as Record<EpsgCode, Epsg>;
