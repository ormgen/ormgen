import fs from 'fs-extra';
import { OrmGenerator } from '../index.template';
import { createEntitiesNamespaceLines } from './index.entities';
import { createEntityNameLines } from './index.entities.name';
import { execSync } from 'child_process';
import { createEntitiesUtils } from './index.entities.utils';
import { TypesGeneratorConfig, configStore } from './index.config';
import { createPaths } from './index.paths';

const packageJson = {
	name: '@ormgen/__generated',
	main: 'index.js',
	types: 'index.d.ts',
};

export function typesGenerator(config: TypesGeneratorConfig = {}): OrmGenerator {
	const { typesFilePath } = config;

	configStore.config = config;

	let lines = [] as string[];

	function addLines(newLines: string[]) {
		lines.push(...newLines);
	}

	return {
		sync: {
			onEnums(enums) {
				const enumNames = enums.map((e) => `'${e.name}'`);
				const enumNamesString = enumNames.join(' | ');
				const enumLines = `export type EnumName = ${enumNamesString};`;

				addLines([enumLines]);
			},

			onEntities(entities) {
				addLines(createEntityNameLines(entities));
				addLines(['']);
				addLines(createEntitiesNamespaceLines(entities));
				addLines(createEntitiesUtils(entities));
			},

			async onWrite() {
				const { packagePath, packageJsonPath, indexPath, indexTypesPath } = await createPaths(config);

				await fs.remove(packagePath);
				await fs.ensureDir(packagePath);

				await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
				await fs.writeFile(indexPath, 'modules.exports = {}');
				await fs.writeFile(indexTypesPath, lines.join('\n'));

				if (typesFilePath) {
					await fs.ensureFile(typesFilePath);
					await fs.copy(indexTypesPath, typesFilePath, { overwrite: true });
				}
			},

			async onComplete() {
				if (typesFilePath) {
					execSync(`npx prettier --write ${typesFilePath}`, { stdio: 'inherit' });
				}
			},
		},
	};
}
