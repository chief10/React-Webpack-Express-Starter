export const DO_SOMETHING = "DO_SOMETHING";

export function addSomething(thingToAdd) {
	return {
		type: DO_SOMETHING,
		id: '1',
		thingToAdd
	}
}
