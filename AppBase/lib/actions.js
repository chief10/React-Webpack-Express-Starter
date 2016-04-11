export const DO_SOMETHING = "DO_SOMETHING";

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