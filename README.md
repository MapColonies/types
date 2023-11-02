# @map-colonies/types

this package provides common Map-Colonies types

---
## Installation

``` 
$ npm install @map-colonies/types
```


## Documentation
All the code in the package is documented using TypeDoc. The auto generated site is available at [here](https://mapcolonies.github.io/types/).

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
