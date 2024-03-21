import { Entity } from '~/modelling';

export function createEntitiesUtils(entities: Entity[]) {
	const modelLines = entities.map(({ name }) => `${name}: Entities.${name}.Model`);
	const seedLines = entities.map(({ name }) => `${name}: Entities.${name}.Seed`);

	return [
		// <>
		`export type AllEntityModels = {`,
		...modelLines,
		`}`,

		'',

		`export type AllEntitySeeds = {`,
		...seedLines,
		`}`,
	];
}
