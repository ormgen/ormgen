import { execSync } from 'child_process';

import { OrmGenerator } from '../index.template';
import { PrismaGeneratorConfig } from './index.config';
import { createBasicLines } from './index.lines.basic';

import fs from 'fs-extra';
import { createEnumLines } from './index.lines.enum';
import { createEntityLines } from './index.lines.entity';
import { createObsMessage } from '~/helpers';
import { seedEntity } from './index.seed';

export function prismaGenerator(config: PrismaGeneratorConfig): OrmGenerator {
	const { schemaPath = 'prisma/schema.prisma' } = config;

	const lines = [createObsMessage(), ...createBasicLines(config)];

	return {
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
				execSync(`npx prisma validate --schema ${schemaPath}`, { stdio: 'inherit' });
				execSync(`npx prisma format --schema ${schemaPath}`, { stdio: 'inherit' });
			},
		},

		seed: {
			onEntity(seed) {
				return seedEntity(seed);
			},
		},
	};
}
