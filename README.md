# @map-colonies/types

this package provides common Map-Colonies types

---
## Installation

``` 
$ npm install @map-colonies/types
```

### Usage

```typescript
import { EPSGDATA, EpsgCode } from '@map-colonies/types';

// SAMPLE CODE FOR CREATING PARTIAL TYPE BASED ON EPSGCODE 
type EpsgPartial = Extract<EpsgCode, '2000' | '2001'>;
const o: EpsgPartial = '2000';
...
...
...

const code:EpsgCode = '2001';
const exportRequestParams: CreateExportRequestParams = {
  artifactCRS: code; // or EPSGDATA['2001'].code
  ..
  ..
};


...
```
