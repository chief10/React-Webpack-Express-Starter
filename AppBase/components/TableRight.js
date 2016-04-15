import React, { Component } from 'react';
import * as helpers from '../lib/helpers.js';


export default class TableRight extends Component {
  
  render() {
    const { dataRows } = this.props;
    const headValues   = Object.keys(dataRows[0]);
    const bodyValues = _properBodyValues(dataRows)    
    
    const formattedHeadValues = headValues.map((val) => {
      return _camelCaseItems(val);
    }).filter((val) => {
      return val !== null;
    });
    


    return (
      <table className="table ni-table-comparison">
        <thead>
          <tr>
          {formattedHeadValues.map((val, idx) => {
            return (
              <th key={idx}>
                <div>
                  <span>{val}</span>
                </div>
              </th>
            )
          })}
          </tr>
        </thead>
        <tbody>
          {bodyValues.map((item, idx) => {
            //Only want values for the body.
            //For each of the body values, I want to create a 
            //new row.
             return (
               <tr key={idx}>
                 {_provideValuesFromKeys(item)
                   .map((localVal, key) => {
                     return (
                       <td key={key}>
                        <div>{localVal}</div>
                       </td>
                     )
                   })
                  }
               </tr>
             )
       
          })}
        </tbody>
      </table>
    )
  }
}


//Checks to make sure the values are not one of the ones we have no 
//intrest in.
function _removeUnwantedValues(val) {
       if ( val === "id" || 
           val === "selected" ||
           val === "Price") {
             return true;
           } else {
             return false;
           }
}

//If the item is not one of the unwanted terms,
//go a head and camelcase it.
function _camelCaseItems(item) {
  return _removeUnwantedValues(item) ? 
          null :
          helpers.camelToReadable(item);   
}

//Formats the body data to include only the items we want.
function _properBodyValues (arrOfValues) {
  return arrOfValues.map((val) => {
    let newObj = {};
    for( var props in val) {
      if ( !_removeUnwantedValues(props) ) {
        newObj[props] = val[props];
      }
    }
    return newObj;
  });
}

//Takes an object and gives the values from
//each key.
function _provideValuesFromKeys(obj) {
  let arrOfValues = [];
  for( let prop in obj) {
    arrOfValues.push(obj[prop])
  }
  return arrOfValues;
}