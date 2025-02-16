/* eslint-disable @typescript-eslint/naming-convention */
export const Transparency = {
  OPAQUE: 'OPAQUE',
  TRANSPARENT: 'TRANSPARENT',
} as const;

export type Transparency = (typeof Transparency)[keyof typeof Transparency];
