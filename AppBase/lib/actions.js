export const DO_SOMETHING = "DO_SOMETHING";
export const POPULATE_DATAROWS = "POPULATE_DATAROWS";

export function populateInitialData(startingData) {
  return {
    type: POPULATE_DATAROWS,
    dataRows: startingData    
  }
}




//These functions aren't used for anything.
export function addSomething(thingToAdd) {
	return {
		type: DO_SOMETHING,
		id: '1',
		thingToAdd
	}
}

export function giveNumTwo() {
  let item = 2;
  return item;
}

export function giveNumberThree() {
  let item = 3;
  return item;
}