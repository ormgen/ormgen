import { OrmGenerator } from '../index.template';
import { createEntitiesNamespaceLines } from './index.entities';
import { createEntityNameLines } from './index.entities.name';
import { createEntitiesUtils } from './index.entities.utils';
import { TypesGeneratorConfig } from './index.config';
import { GeneratedPackage, createObsMessage, runFormatSync } from '~/helpers';
import { createMixinLines } from './index.mixins';
import { createEnumLines } from './index.enum';
import { configStore } from '~/internals';

export function typesGenerator(config: TypesGeneratorConfig = {}): OrmGenerator {
	configStore.types = config;

	const { nodeModulesPath = '' } = config;

	let lines = [createObsMessage(), ''];

	function addLines(newLines: string[]) {
		lines.push(...newLines);
	}

	return {
		name: 'Types',

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

			onEnum(e) {
				addLines(createEnumLines(e));
			},

			onEntities(entities) {
				addLines(createEntityNameLines(entities));
				addLines(['']);
				addLines(createEntitiesNamespaceLines(entities));
				addLines(createEntitiesUtils(entities));
			},

			async onWrite() {
				const { indexPath } = await GeneratedPackage.createPaths({ nodeModulesPath });

				const typesContent = lines.join('\n');

				await GeneratedPackage.init({ nodeModulesPath, typesContent });

				runFormatSync(indexPath);
			},
		},
	};
}

export type { TypesGeneratorConfig };
