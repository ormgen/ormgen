import { Enum } from '~/modelling';

export function createEnumLines(e: Enum) {
	const { name, values } = e;

	const valueString = values.map((v) => `${v}: '${v}'`).join();

	const lines = [
		`export const ${e.name} = { ${valueString} } as const`,
		`export type ${name} = keyof typeof ${name};`,
		`export const ${name}__SCHEMA = z.nativeEnum(${name})`,
		`export const ${name}__VALUES = Object.keys(${name}) as [${name}, ...${name}[]]`,
	];

	return lines.filter(Boolean) as string[];
}
