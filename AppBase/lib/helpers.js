

export function camelToReadable(str) {
  if( typeof str !== "string") {
    throw new Error("This function only accepts strings as arguments");
  }
  
  return str.replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str){
          return str.toUpperCase();
      });
}

//Checks to make sure the values are not one of the ones we have no 
//intrest in.
export function removeUnwantedValues(val) {
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
export function camelCaseItems(item) {
  return removeUnwantedValues(item) ? 
          null :
          camelToReadable(item);   
}

//Formats the body data to include only the items we want.
export function properBodyValues (arrOfValues) {
  return arrOfValues.map((val) => {
    let newObj = {};
    for( var props in val) {
      if ( !removeUnwantedValues(props) ) {
        newObj[props] = val[props];
      }
    }
    return newObj;
  });
}

//Takes an object and gives the values from
//each key.
export function provideValuesFromKeys(obj) {
  let arrOfValues = [];
  for( let prop in obj) {
    arrOfValues.push(obj[prop])
  }
  return arrOfValues;
}