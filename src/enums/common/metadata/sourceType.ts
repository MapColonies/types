/* eslint-disable @typescript-eslint/naming-convention */
export const SourceType = {
  CATALOG_RESOURCE: 'CATALOG_RESOURCE',
  EXTERNAL: 'EXTERNAL',
} as const;

export type SourceType = (typeof SourceType)[keyof typeof SourceType];
/* eslint-enable @typescript-eslint/naming-convention */
