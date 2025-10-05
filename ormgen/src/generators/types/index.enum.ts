import { EnumShape } from '~/modelling';

export function createEnumLines(e: EnumShape) {
	const { name, values } = e;

	const valueString = values.map((v) => `${v}: '${v}'`).join();

	return [
		// <>
		`export const ${e.name} = { ${valueString} } as const`,
		`export type ${name} = keyof typeof ${name};`,
		`export const ${name}__VALUES = Object.keys(${name}) as [${name}, ...${name}[]]`,
	].filter(Boolean);
}
