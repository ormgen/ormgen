import { GeneratedPackage } from '~/helpers';

export async function setup() {
	GeneratedPackage.init({
		nodeModulesPath: '',

		typesContent: [
			`export type EnumName = string;`,
			`export type EntityName = string;`,
			`export type AllEntityModels = any;`,
			`export type AllEntitySeeds = any;`,
		].join('\n'),
	});
}
