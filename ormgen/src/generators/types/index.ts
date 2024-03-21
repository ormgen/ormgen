import { OrmGenerator } from '../index.template';
import { createEntitiesNamespaceLines } from './index.entities';
import { createEntityNameLines } from './index.entities.name';
import { execSync } from 'child_process';
import { createEntitiesUtils } from './index.entities.utils';
import { TypesGeneratorConfig, configStore } from './index.config';
import { GeneratedPackage, createObsMessage } from '~/helpers';
import fs from 'fs-extra';

export function typesGenerator(config: TypesGeneratorConfig = {}): OrmGenerator {
	const { nodeModulesPath = '', typesFilePath } = config;

	configStore.config = config;

	let lines = [createObsMessage()] as string[];

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
				const { indexTypesPath } = await GeneratedPackage.createPaths({ nodeModulesPath });

				const typesContent = lines.join('\n');

				await GeneratedPackage.init({ nodeModulesPath, typesContent });

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
