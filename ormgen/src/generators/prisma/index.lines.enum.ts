import { EnumShape } from '~/modelling';

export function createEnumLines(e: EnumShape) {
	const { name, values, skipDatabase } = e;

	if (skipDatabase) {
		return [];
	}

	const valueStrings = values.map((v) => {
		return `\t${v}`;
	});

	return [`enum ${name} {`, ...valueStrings, `}`];
}
