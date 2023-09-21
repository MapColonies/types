import { contentType } from '../../src/mime/contentTypes';

describe('mimes', () => {
  describe('contentType', () => {
    it('return "image/png" for providing string "png"', () => {
      const ct = contentType('png');
      expect(ct).toEqual('image/png');
    });

    it('return "image/jpeg" for providing string "jpeg"', () => {
      const ct = contentType('jpeg');
      expect(ct).toEqual('image/jpeg');
    });

    it('return "image/jpeg" for providing string "jpg"', () => {
      const ct = contentType('jpg');
      expect(ct).toEqual('image/jpeg');
    });

    it('return "application/json" for providing string "test.json"', () => {
      const ct = contentType('test.json');
      expect(ct).toEqual('application/json');
    });

    it('return undefined for providing not support string "not.supported"', () => {
      const ct = contentType('not.supported');
      expect(ct).toBeUndefined();
    });
  });
});
