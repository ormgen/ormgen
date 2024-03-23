import { getNodeModulesPath } from '~/helpers';
import fs from 'fs-extra';

namespace Config {
	export interface CreatePaths {
		nodeModulesPath: string;
	}

	export interface Init extends CreatePaths {
		typesContent: string;
	}
}

export namespace GeneratedPackage {
	const packageJson = {
		name: '@ormgen/__generated',
		main: 'index.ts',
		types: 'index.ts',
	};

	const packageJsonString = JSON.stringify(packageJson, null, 2);

	export async function createPaths(config: Config.CreatePaths) {
		const { nodeModulesPath } = config;

		const nmPath = nodeModulesPath || (await getNodeModulesPath());

		const packagePath = `${nmPath}/@ormgen/__generated`;
		const packageJsonPath = `${packagePath}/package.json`;
		const indexPath = `${packagePath}/index.ts`;

		return { packagePath, packageJsonPath, indexPath };
	}

	export async function init(config: Config.Init) {
		const { typesContent } = config;

		const { packagePath, packageJsonPath, indexPath } = await createPaths(config);

		await fs.remove(packagePath);
		await fs.ensureDir(packagePath);

		await fs.writeFile(packageJsonPath, packageJsonString);
		await fs.writeFile(indexPath, typesContent);
	}
}
