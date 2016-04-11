import { assert, expect } from 'chai';
import * as actions from '../AppBase/lib/actions.js';

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Actions 2.0', () => {
  it("Should return the number two", () => {
    expect(actions.giveNumTwo()).to.be.a('number');
  })
})