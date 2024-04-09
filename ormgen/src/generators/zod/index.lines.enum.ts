import { Enum } from '~/modelling';

export function createEnumsLines(enums: Enum[]) {
	const importNames = enums.map((e) => {
		return e.name;
	});

	const lines: string[] = [];

	if (importNames.length) {
		lines.push(`import { ${importNames.join(', ')} } from '@ormgen/__generated';`);
	}

	for (const e of enums) {
		lines.push(`export const ${e.name}__SCHEMA = z.nativeEnum(${e.name})`);
	}

	return lines;
}
