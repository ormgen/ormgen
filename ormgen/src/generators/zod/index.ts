import { execSync } from 'child_process';

import { Entity, Enum } from '~/modelling';
import { OrmGenerator } from '../index.template';
import fs from 'fs-extra';
import { createEntityLines } from './index.lines.entity';
import path from 'path';
import { createImportMetaLines } from './index.lines.meta';
import { createEnumLines } from './index.lines.enum';

interface Config {
	filePath?: string;
}

export class ZodGenerator extends OrmGenerator {
	constructor(config: Config) {
		super();

		this.config = config;
		this.lines = ['import {z} from "zod";'];
	}

	config: Config;

	lines: string[];

	get outputFilePath() {
		const relative = this.config.filePath || 'zod/index.ts';
		const absolute = path.join(process.cwd(), relative);

		return { relative, absolute };
	}

	__addLines(lines: string[]) {
		this.lines = this.lines.concat(lines);
	}

	onMetaFile(metaFilePath: string, entity: Entity) {
		this.__addLines(createImportMetaLines(this, metaFilePath, entity));
	}

	onEnum(e: Enum) {
		this.__addLines(createEnumLines(e));
	}

	onEntity(entity: Entity, entities: Entity[]) {
		this.__addLines(createEntityLines(entity, entities));
	}

	async onWrite() {
		await fs.ensureFile(this.outputFilePath.relative);
		await fs.writeFile(this.outputFilePath.relative, this.lines.join('\n'));
	}

	onComplete() {
		execSync(`npx prettier --write ${this.outputFilePath.relative}`, {
			stdio: 'inherit',
		});
	}

	onEntitySeed() {}
}
