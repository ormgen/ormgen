import { OrmGenerator } from '../index.template';
import { createEntitiesNamespaceLines } from './index.entities';
import { createEntityNameLines } from './index.entities.name';
import { createEntitiesUtils } from './index.entities.utils';
import { TypesGeneratorConfig, configStore } from './index.config';
import { GeneratedPackage, createObsMessage, runPrettierSync } from '~/helpers';
import { createMixinLines } from './index.mixins';

export function typesGenerator(config: TypesGeneratorConfig = {}): OrmGenerator {
	const { nodeModulesPath = '' } = config;

	configStore.config = config;

	let lines = [createObsMessage(), ''];

	function addLines(newLines: string[]) {
		lines.push(...newLines);
	}

	return {
		sync: {
			onStart() {
				addLines(createMixinLines());
				addLines(['']);
			},

			onEnums(enums) {
				const enumNames = enums.map((e) => `'${e.name}'`);
				const enumNamesString = enumNames.join(' | ') || 'never';
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

				runPrettierSync(indexTypesPath);
			},
		},
	};
}
