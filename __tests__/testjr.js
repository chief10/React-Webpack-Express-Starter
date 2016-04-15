import { assert, expect } from 'chai';
import * as actions from '../AppBase/lib/actions.js';

describe('Actions 2.0', () => {
  it("Should return the number two", () => {
    expect(actions.giveNumTwo()).to.be.a('number');
  })
})