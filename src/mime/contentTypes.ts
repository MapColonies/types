import { lookup } from 'mime-types';

/**
 * Lookup the content-type associated with a file
 * @param fileStr file ext name or full file name: for example 'png' | 'sample.json'
 * @returns string | undefined -  string is the expected content-type, undefined file if not supported.
 */
export function contentType(fileStr: string): string | undefined {
  try {
    const contentType = lookup(fileStr);
    return contentType !== false ? contentType : undefined; // if not found content-type will return undefined
  } catch (error) {
    const message = `Error while trying to lookup the file content type with error: ${JSON.stringify(error)}`;
    throw new Error(message);
  }
}
