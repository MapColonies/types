/* eslint-disable @typescript-eslint/naming-convention */
export const ResourceResolutionStatus = {
  RESOLVED: 'RESOLVED',
  UNRESOLVED: 'UNRESOLVED',
} as const;

export type ResourceResolutionStatus = (typeof ResourceResolutionStatus)[keyof typeof ResourceResolutionStatus];
/* eslint-enable @typescript-eslint/naming-convention */
