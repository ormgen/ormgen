import fs from 'fs-extra';
import path from 'path';

import { OrmGenerator } from '../index.template';
import { createEntityLines } from './index.lines.entity';
import { createImportMetaLines } from './index.lines.meta';
import { createEnumsLines } from './index.lines.enum';
import { createObsMessage, runFormatSync } from '~/helpers';
import { ZodGeneratorConfig } from './index.config';
import { configStore } from '~/internals';
import { createDateSchemaLines } from './index.lines.date';
import { createUtilLines } from './index.lines.utils';

export function zodGenerator(config: ZodGeneratorConfig): OrmGenerator {
	configStore.zod = config;

	const { filePath = 'zod/index.ts', zodPackage = 'zod', createMetaImportPath } = config;

	const relativeOutputFilePath = filePath;
	const absoluteOutputFilePath = path.resolve(filePath);

	const importLines: string[] = [`import { z } from "${zodPackage}";`];
	const exportLines: string[] = [];
	const entityLines: string[] = [];

	return {
		name: 'Zod',

		sync: {
			onEnums({ enums }) {
				const res = createEnumsLines(enums);

				importLines.push(...res.importLines, '');
				exportLines.push(...res.exportLines, '');
			},

			onEntity({ entity, absoluteEntityMetaFilePath }) {
				entityLines.push(...createEntityLines({ entity, absoluteEntityMetaFilePath }), '');
			},

			onMetaFile({ entity, absoluteEntityMetaFilePath }) {
				const metaLines = createImportMetaLines({
					createMetaImportPath,
					absoluteOutputFilePath,
					absoluteEntityMetaFilePath,
					entity,
				});

				importLines.push(...metaLines, '');
			},

			async onWrite() {
				const content = [createObsMessage(), importLines, exportLines, createDateSchemaLines(), createUtilLines(), entityLines]
					.map((group) => [group, '']) // Space between all groups
					.flat(10)
					.join('\n');

				await fs.ensureFile(relativeOutputFilePath);
				await fs.writeFile(relativeOutputFilePath, content);
			},

			onComplete() {
				runFormatSync(absoluteOutputFilePath);
			},
		},

		seed: {},
	};
}

export type { ZodGeneratorConfig };
