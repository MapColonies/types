import { ProtocolType } from '../../src/enums/common/metadata/protocolType';

const sorted = (values: string[]): string[] => [...values].sort((a, b) => a.localeCompare(b));

/**
 * Locks down the public wire contract - consumers validate these values through
 * `z.nativeEnum(ProtocolType)`. Also guards against `ProtocolType` losing its TypeScript type
 * (it must remain usable both as a value and as a type, like any other enum in this file).
 */
describe('protocolType', () => {
  it('exposes exactly the expected values', () => {
    expect(sorted(Object.values(ProtocolType))).toEqual(
      sorted(['WMS', 'WMTS', 'XYZ', 'OSM', 'MAPBOX_STYLE', 'BING_MAPS', 'WFS', 'WCS', 'COPC', '3DTiles', 'TERRAIN_QMESH', 'VECTOR_TILES'])
    );
  });

  it('supports direct member (dot) access', () => {
    expect(ProtocolType.WMS).toBe('WMS');
    expect(ProtocolType.THREE_D_TILES).toBe('3DTiles');
    expect(ProtocolType.TERRAIN_QMESH).toBe('TERRAIN_QMESH');
    expect(ProtocolType.VECTOR_TILES).toBe('VECTOR_TILES');
  });

  it('is usable as a TypeScript type (not value-only)', () => {
    const accept = (p: ProtocolType): ProtocolType => p;
    expect(accept(ProtocolType.COPC)).toBe('COPC');
  });
});
