import { getNodeModulesPath } from '~/helpers/getNodeModulesPath';
import { OrmGenerator } from '../index.template';
import fs from 'fs-extra';

export interface TypesGeneratorConfig {
	nodeModulesPath?: string;
}

const packageJson = {
	name: '@ormgen/__generated',
	main: 'index.js',
	types: 'index.d.ts',
};

async function createPaths(config: TypesGeneratorConfig = {}) {
	const { nodeModulesPath } = config;

	const nmPath = nodeModulesPath || (await getNodeModulesPath());

	const packagePath = `${nmPath}/@ormgen/__generated`;
	const packageJsonPath = `${packagePath}/package.json`;
	const indexPath = `${packagePath}/index.js`;
	const indexTypesPath = `${packagePath}/index.d.ts`;

	return { packagePath, packageJsonPath, indexPath, indexTypesPath };
}

export function typesGenerator(config: TypesGeneratorConfig): OrmGenerator {
	const lines = [] as string[];

	return {
		sync: {
			onEnums(enums) {
				lines.push(`export type EnumName = ${enums.map((e) => `'${e.name}'`).join(' | ')};`);
			},

			onEntities(entities) {
				lines.push(`export type EntityName = ${entities.map((e) => `'${e.name}'`).join(' | ')};`);
			},

			async onWrite() {
				const { packagePath, packageJsonPath, indexPath, indexTypesPath } = await createPaths(config);

				await fs.remove(packagePath);
				await fs.ensureDir(packagePath);

				await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
				await fs.writeFile(indexPath, 'modules.exports = {}');
				await fs.writeFile(indexTypesPath, lines.join('\n'));
			},
		},
	};
}
