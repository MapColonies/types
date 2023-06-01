const { Project } = require('ts-morph');
const epsg_all = require('epsg-index/all.json');

const epsg_keys = Object.keys(epsg_all).reduce((accumulator, current) => {
  accumulator.push(`${current}`);
  return accumulator;
}, []);

// Create a new TypeScript project
const project = new Project();

// Create a new source file
const sourceFile = project.createSourceFile('./src/enums/geo/GENERATED/epsg_codes_type.ts', undefined, {
  overwrite: true,
});

// Create a type alias
sourceFile.addTypeAlias({
  name: 'EpsgCode',
  isExported: true,
  type: `"${epsg_keys.join('" | "')}"`,
});

// Format the generated code
sourceFile.formatText();

// Save the source file
sourceFile.saveSync();

console.log('EPSG TYPE generated successfully.');
