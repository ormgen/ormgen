import { execSync } from 'child_process';

import { OrmGenerator } from '../index.template';
import { PrismaConfig } from './index.config';
import { createBasicLines } from './index.lines.basic';

import fs from 'fs-extra';
import { createEnumLines } from './index.lines.enum';
import { createEntityLines } from './index.lines.entity';
import { Entity$, Enum } from '~/modelling';

export class PrismaGenerator extends OrmGenerator {
	constructor(config: PrismaConfig) {
		super();

		this.config = config;

		this.lines = [...createBasicLines(config)];
	}

	config: PrismaConfig;

	lines: string[];

	get schemaPath() {
		return this.config.schemaPath || 'prisma/schema.prisma';
	}

	addLines(lines: string[]) {
		this.lines = this.lines.concat(lines);
	}

	onEnum(e: Enum) {
		this.addLines(createEnumLines(e));
	}

	onEntity(entity: Entity$, entities: Entity$[]) {
		this.addLines(createEntityLines(entity, entities));
	}

	async onWrite() {
		await fs.ensureFile(this.schemaPath);
		await fs.writeFile(this.schemaPath, this.lines.join('\n'));
	}

	onComplete() {
		execSync(`npx prisma format --schema ${this.schemaPath}`);
	}
}

export { PrismaConfig };
