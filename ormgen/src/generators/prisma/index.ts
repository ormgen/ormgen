import { execSync } from 'child_process';

import path from 'path';
import fs from 'fs-extra';

import { OrmGenerator } from '../index.template';
import { PrismaGeneratorConfig } from './index.config';
import { createBasicLines } from './index.lines.basic';

import { createEnumLines } from './index.lines.enum';
import { createEntityLines } from './index.lines.entity';
import { createObsMessage } from '~/helpers';
import { configStore } from '~/internals';
import { resetAllTables } from './index.reset';
import { seedEntity } from './index.seed';

export function prismaGenerator(config: PrismaGeneratorConfig): OrmGenerator {
	configStore.prisma = config;

	const { schemaPath = 'prisma/schema.prisma' } = config;

	const absoluteSchemaPath = path.resolve(schemaPath);

	const lines = [createObsMessage(), ...createBasicLines()];

	return {
		name: 'Prisma',

		sync: {
			onEnum(e) {
				lines.push(...createEnumLines(e));
			},

			onEntity(entity) {
				lines.push(...createEntityLines(entity));
			},

			onWrite() {
				return fs.writeFile(schemaPath, lines.join('\n'));
			},

			onComplete() {
				execSync(`npx prisma validate --schema ${absoluteSchemaPath}`, { stdio: 'inherit' });
				execSync(`npx prisma format --schema ${absoluteSchemaPath}`, { stdio: 'inherit' });
			},
		},

		seed: {
			async onStart() {
				if (config.seed?.resetAllTables) {
					await resetAllTables();
				}
			},

			async onEntity(seed) {
				console.log('--', seed.name);

				return seedEntity(seed);
			},
		},
	};
}

export type { PrismaGeneratorConfig };
