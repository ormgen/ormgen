import { execSync } from 'child_process';

import { Entity, Enum } from '~/modelling';
import { OrmGenerator } from '../index.template';
import fs from 'fs-extra';
import { createEntityLines } from './index.lines.entity';
import path from 'path';
import { createImportMetaLines } from './index.lines.meta';
import { createEnumLines } from './index.lines.enum';

interface ZodGeneratorConfig {
	filePath?: string;

	zodPackage?: string;
}

export function zodGenerator(config: ZodGeneratorConfig): OrmGenerator {
	const { filePath = 'zod/index.ts', zodPackage = 'zod' } = config;

	const relativeOutputFilePath = filePath;
	const absoluteOutputFilePath = path.resolve(filePath);

	const lines = [`import {z} from "${zodPackage}";`];

	function addLines(newLines: string[]) {
		lines.push(...newLines);
	}

	return {
		sync: {
			onEnum(e: Enum) {
				addLines(createEnumLines(e));
			},

			onEntity(entity, entities) {
				addLines(createEntityLines(entity, entities));
			},

			onMetaFile(absoluteMetaFilePath: string, entity: Entity) {
				addLines(createImportMetaLines({ absoluteOutputFilePath, absoluteMetaFilePath, entity }));
			},

			async onWrite() {
				await fs.ensureFile(relativeOutputFilePath);
				await fs.writeFile(relativeOutputFilePath, lines.join('\n'));
			},

			onComplete() {
				execSync(`npx prettier --write ${filePath}`, {
					stdio: 'inherit',
				});
			},
		},

		seed: {},
	};
}
