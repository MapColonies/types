import { DemLinkType, LinkType, RasterLinkType, ThreeDLinkType, VectorLinkType } from '../../src/enums/common/metadata/linkType';

const sorted = (values: string[]): string[] => [...values].sort((a, b) => a.localeCompare(b));

describe('LinkType (combined enum-like construct)', () => {
  it('exposes exactly the union of unique values across all four source enums', () => {
    const expected = new Set([
      ...Object.values(RasterLinkType),
      ...Object.values(ThreeDLinkType),
      ...Object.values(DemLinkType),
      ...Object.values(VectorLinkType),
    ]);
    expect(sorted(Object.values(LinkType))).toEqual(sorted(Array.from(expected)));
  });

  it('deduplicates overlapping keys without losing information (same string value either way)', () => {
    // WMTS appears in RasterLinkType, DemLinkType and VectorLinkType - all with the same value.
    expect(LinkType.WMTS).toBe('WMTS');
    // WFS appears in RasterLinkType and VectorLinkType.
    expect(LinkType.WFS).toBe('WFS');
    // TERRAIN_QMESH appears in ThreeDLinkType and DemLinkType.
    expect(LinkType.TERRAIN_QMESH).toBe('TERRAIN_QMESH');
    // THUMBNAIL_S/M/L appear in RasterLinkType, ThreeDLinkType and DemLinkType.
    expect(LinkType.THUMBNAIL_S).toBe('THUMBNAIL_S');
  });

  it('supports direct member (dot) access for values unique to a single source enum', () => {
    expect(LinkType.WMTS_KVP).toBe('WMTS_KVP'); // raster-only
    expect(LinkType.THREE_D_TILES).toBe('3DTiles'); // 3D-only
    expect(LinkType.LEGEND_DOC).toBe('LEGEND_DOC'); // raster-only
  });

  it('accepts every source enum member as a value of the LinkType type (compile-time contract)', () => {
    // These assignments are the actual test: this file must compile. If the combined type were
    // derived as `(typeof LinkType)[keyof typeof LinkType]` instead of the explicit union, some
    // of these would fail to compile with TS2820 (verified during implementation) because
    // object-spread keeps only one source enum's nominal type per overlapping key.
    const a: LinkType = RasterLinkType.WMTS;
    const b: LinkType = DemLinkType.WMTS;
    const c: LinkType = VectorLinkType.WMTS;
    const d: LinkType = RasterLinkType.WFS;
    const e: LinkType = VectorLinkType.WFS;
    const f: LinkType = ThreeDLinkType.TERRAIN_QMESH;
    const g: LinkType = DemLinkType.TERRAIN_QMESH;
    const h: LinkType = RasterLinkType.THUMBNAIL_S;
    const i: LinkType = ThreeDLinkType.THUMBNAIL_S;
    const j: LinkType = DemLinkType.THUMBNAIL_S;
    const k: LinkType = RasterLinkType.LEGEND_DOC;
    const l: LinkType = ThreeDLinkType.THREE_D_TILES;

    expect([a, b, c, d, e, f, g, h, i, j, k, l]).toEqual([
      'WMTS',
      'WMTS',
      'WMTS',
      'WFS',
      'WFS',
      'TERRAIN_QMESH',
      'TERRAIN_QMESH',
      'THUMBNAIL_S',
      'THUMBNAIL_S',
      'THUMBNAIL_S',
      'LEGEND_DOC',
      '3DTiles',
    ]);
  });

  it('rejects a value that belongs to none of the four source enums', () => {
    expect(Object.values(LinkType)).not.toContain('NOT_A_REAL_LINK_TYPE');
  });
});
