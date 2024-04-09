import { Enum } from '~/modelling';

export function createEnumsLines(enums: Enum[]) {
	const importNames = enums.map((e) => {
		return e.name;
	});

	const importLines: string[] = [];
	const exportLines: string[] = [];

	if (importNames.length) {
		importLines.push(`import { ${importNames.join(', ')} } from '@ormgen/__generated';`);
	}

	for (const e of enums) {
		exportLines.push(`export const ${e.name}__SCHEMA = z.nativeEnum(${e.name})`);
	}

	return { importLines, exportLines };
}
