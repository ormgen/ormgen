import { Entity } from '~/modelling';
import { OrmGenerator } from '../index.template';
import fs from 'fs-extra';
import { createEntityLines } from './index.lines.entity';
import path from 'path';
import { createImportMetaLines } from './index.lines.meta';
import { createEnumsLines } from './index.lines.enum';
import { createObsMessage, runFormatSync } from '~/helpers';
import { ZodGeneratorConfig } from './index.config';
import { configStore } from '~/internals';

export function zodGenerator(config: ZodGeneratorConfig): OrmGenerator {
	configStore.zod = config;

	const { filePath = 'zod/index.ts', zodPackage = 'zod' } = config;

	const relativeOutputFilePath = filePath;
	const absoluteOutputFilePath = path.resolve(filePath);

	const lines = [createObsMessage(), `import { z } from "${zodPackage}";`];

	function addLines(newLines: string[], ...rest: string[]) {
		lines.push(...newLines, ...rest);
	}

	return {
		name: 'Zod',

		sync: {
			onEnums(enums) {
				addLines(createEnumsLines(enums));
			},

			onEntity(entity) {
				addLines(createEntityLines(entity), '');
			},

			onMetaFile(absoluteMetaFilePath: string, entity: Entity) {
				const metaLines = createImportMetaLines({
					absoluteOutputFilePath,
					absoluteMetaFilePath,
					entity,
				});

				addLines(metaLines, '');
			},

			async onWrite() {
				await fs.ensureFile(relativeOutputFilePath);
				await fs.writeFile(relativeOutputFilePath, lines.join('\n'));
			},

			onComplete() {
				runFormatSync(filePath);
			},
		},

		seed: {},
	};
}

export type { ZodGeneratorConfig };
