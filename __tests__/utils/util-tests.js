//This file is for testing things that may not fit in other places to test.
import { expect } from 'chai';
import * as utils from '../../AppBase/lib/helpers.js';

describe("Helper methods", () => {
  it("Should properly convert camelcased word to Readable", () => {
    let testItem = utils.camelToReadable("fooBar");
    expect(testItem).to.equal("Foo Bar");
  })
})
