import { execSync } from 'child_process';

import { Entity, Enum } from '~/modelling';
import { OrmGenerator } from '../index.template';
import fs from 'fs-extra';

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

	get filePath() {
		return this.config.filePath || 'zod/index.ts';
	}

	__addLines(lines: string[]) {
		this.lines = this.lines.concat(lines);
	}

	onEnum(e: Enum) {}

	onEntity(entity: Entity, entities: Entity[]) {
		this.__addLines([
			// <>
			`export namespace ${entity.name} {`,
			`export const model = z.object({`,
			`})`,
			`export const seed = z.object({`,
			`})`,

			`export type ModelSchema = typeof model;`,
			`export type Model = z.infer<typeof model>;`,

			`export type SeedSchema = typeof seed;`,
			`export type Seed = z.infer<typeof seed>;`,
			`}`,
		]);
	}

	async onWrite() {
		await fs.ensureFile(this.filePath);
		await fs.writeFile(this.filePath, this.lines.join('\n'));
	}

	onComplete() {
		execSync(`npx prettier --write ${this.filePath}`, {
			stdio: 'inherit',
		});
	}
}
