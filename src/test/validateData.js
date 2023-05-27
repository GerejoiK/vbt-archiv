import turniere from "$lib/data";
import Ajv from "ajv";
import schema from "$lib/schema.json";

export default function validate() {
	const ajv = new Ajv({ strict: false }); // options can be passed, e.g. {allErrors: true}
	const validate = ajv.compile(schema);
	Object.values(turniere).forEach(turnier => {
		const valid = validate(turnier);
		if (!valid) console.log(validate.errors);
	});
}
