'use strict';

describe('battlrApp.version module', function() {
  beforeEach(module('battlrApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
