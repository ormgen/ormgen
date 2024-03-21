import { getNodeModulesPath } from '~/helpers';
import { TypesGeneratorConfig } from './index.config';

export async function createPaths(config: TypesGeneratorConfig = {}) {
	const { nodeModulesPath } = config;

	const nmPath = nodeModulesPath || (await getNodeModulesPath());

	const packagePath = `${nmPath}/@ormgen/__generated`;
	const packageJsonPath = `${packagePath}/package.json`;
	const indexPath = `${packagePath}/index.js`;
	const indexTypesPath = `${packagePath}/index.d.ts`;

	return { packagePath, packageJsonPath, indexPath, indexTypesPath };
}
