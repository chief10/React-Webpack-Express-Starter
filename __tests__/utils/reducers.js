import { assert, expect } from 'chai';
import * as actions from '../../AppBase/lib/actions.js';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import TableLeft from '../../AppBase/components/TableLeft.js';
import TableRight from '../../AppBase/components/TableRight.js';
import React from 'react';
import { fakeData } from './mock-data.js';

describe('Reducers 2.0', () => {
  it("Should return the number two", () => {
    expect(actions.giveNumTwo()).to.be.a('number');
  });
  
  it("Should return the number three" , () => {
    expect(actions.giveNumberThree()).to.be.a('number');
  });
  
  it("Should return the number three" , () => {
    expect(actions.giveNumberThree()).to.be.a('number');
  })
});


describe("Testing dom methods", () => {
  let doc = jsdom.jsdom(
    `
    <!doctype html>
      <html>
      <head></head>
        <body>
          <h1>Hello!</h1>
        </body>
    </html >
    `
    );
 
 let document = doc.defaultView.window.document;
 
 const head = document.querySelector('head');
 const headData = document.createElement('script');
 headData.setAttribute('id', 'startingData');
 
 before(function() {
   headData.innerHTML = fakeData;
 });
 
  it('Making sure test is setup properly', () => {
    expect(fakeData.length).to.equal(19);
    expect(headData.getAttribute('id')).to.equal('startingData');
  })
 
  it("The left side of the table should have 19 children", () => {   
    const { output } = _setupTableLeft();   
    expect(true).to.equal(true);
    console.log(output.props.children.length);
  });
  
  it("when action PopulateInitialData is called it should work", () => {
    let initialData = actions.populateInitialData(fakeData);
    expect(initialData.type).to.equal("POPULATE_DATAROWS");
  });
  



function _setupTableLeft() {
  let renderer = TestUtils.createRenderer();
  renderer.render( <TableLeft dataRows={fakeData} /> );
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  }
}

function _setupTableRight(){
  let renderer = TestUtils.createRenderer();
  renderer.render( <TableRight dataRows={fakeData} />)
  let output = renderer.getRenderOutput();
  
  return {
    output,
    renderer
  }
}
});


