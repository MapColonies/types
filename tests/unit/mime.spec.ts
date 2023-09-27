import { lookup, contentType } from '../../src/helpers/mime';

describe('mimes', () => {
  describe('lookup', () => {
    it('return "image/png" for providing string "png"', () => {
      const ct = lookup('png');
      expect(ct).toEqual('image/png');
    });

    it('return "image/jpeg" for providing string "jpeg"', () => {
      const ct = lookup('jpeg');
      expect(ct).toEqual('image/jpeg');
    });

    it('return "image/jpeg" for providing string "jpg"', () => {
      const ct = lookup('jpg');
      expect(ct).toEqual('image/jpeg');
    });

    it('return "application/json" for providing string "test.json"', () => {
      const ct = lookup('test.json');
      expect(ct).toEqual('application/json');
    });

    it('return undefined for providing not support string "not.supported"', () => {
      const ct = lookup('not.supported');
      expect(ct).toBeUndefined();
    });
  });

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

    it('return "application/json; charset=utf-8" for providing string "test.json"', () => {
      const ct = contentType('test.json');
      expect(ct).toEqual('application/json; charset=utf-8');
    });

    it('return undefined for providing not support string "not.supported"', () => {
      const ct = contentType('not.supported');
      expect(ct).toBeUndefined();
    });
  });
});
