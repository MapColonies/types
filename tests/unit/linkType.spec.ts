import * as linkTypeModule from '../../src/enums/common/metadata/linkType';
import { AssetLinkType, LegendLinkType, ThumbnailLinkType } from '../../src/enums/common/metadata/linkType';

const sorted = (values: string[]): string[] => [...values].sort((a, b) => a.localeCompare(b));

describe('linkType', () => {
  it('exposes exactly the expected thumbnail values', () => {
    expect(sorted(Object.values(ThumbnailLinkType))).toEqual(sorted(['THUMBNAIL_S', 'THUMBNAIL_M', 'THUMBNAIL_L']));
  });

  it('exposes exactly the expected legend values', () => {
    expect(sorted(Object.values(LegendLinkType))).toEqual(sorted(['LEGEND_DOC', 'LEGEND_IMG']));
  });

  it('composes AssetLinkType as exactly the union of thumbnail and legend values', () => {
    const expected = new Set([...Object.values(ThumbnailLinkType), ...Object.values(LegendLinkType)]);
    expect(sorted(Object.values(AssetLinkType))).toEqual(sorted(Array.from(expected)));
  });

  it('supports direct member (dot) access', () => {
    expect(ThumbnailLinkType.THUMBNAIL_S).toBe('THUMBNAIL_S');
    expect(LegendLinkType.LEGEND_DOC).toBe('LEGEND_DOC');
    expect(AssetLinkType.THUMBNAIL_L).toBe('THUMBNAIL_L');
    expect(AssetLinkType.LEGEND_IMG).toBe('LEGEND_IMG');
  });

  it('is usable as a TypeScript type (not value-only)', () => {
    const accept = (a: AssetLinkType): AssetLinkType => a;
    const thumbnail: ThumbnailLinkType = ThumbnailLinkType.THUMBNAIL_M;
    const legend: LegendLinkType = LegendLinkType.LEGEND_DOC;

    // Both source enums must stay assignable to the composed type.
    expect(accept(thumbnail)).toBe('THUMBNAIL_M');
    expect(accept(legend)).toBe('LEGEND_DOC');
  });

  it('rejects a value that belongs to none of the exported enums', () => {
    expect(Object.values(AssetLinkType)).not.toContain('NOT_A_REAL_LINK_TYPE');
  });

  it('no longer re-exports the domain-specific link enums (moved to mc-models)', () => {
    expect(sorted(Object.keys(linkTypeModule))).toEqual(sorted(['ThumbnailLinkType', 'LegendLinkType', 'AssetLinkType']));
  });
});
