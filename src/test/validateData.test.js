import { expect, test } from "vitest";

import turniere from "../lib/data";
import Ajv from "ajv";
import schema from "../lib/schema.json";

test("validate-yaml", () => {
	expect(validate()).toBe(true);
});

function validate() {
	const ajv = new Ajv({ strict: false });
	const validate = ajv.compile(schema);
	let allValid = true;
	Object.values(turniere).forEach(turnier => {
		const valid = validate(turnier);
		if (!valid) {
			console.log(turnier.name, validate.errors);
			allValid = false;
		}
	});
	return allValid;
}
