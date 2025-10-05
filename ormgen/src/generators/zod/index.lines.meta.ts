import path from 'path';
import fs from 'fs';

import { Entity } from '~/modelling';

import { createMetaName } from './index.meta';
import { ZodGeneratorConfig } from './index.config';

interface Config {
	entity: Entity;
	absoluteOutputFilePath: string;
	absoluteEntityMetaFilePath: string;
	createMetaImportPath: ZodGeneratorConfig.CreateMetaImportPathFn | undefined;
}

function createDefaultMetaImportPath(config: Config) {
	const { absoluteOutputFilePath, absoluteEntityMetaFilePath } = config;

	const absoluteOutputDir = path.dirname(absoluteOutputFilePath);

	const relativeFilePath = path.relative(absoluteOutputDir, absoluteEntityMetaFilePath);

	return relativeFilePath.split('.').slice(0, -1).join('.');
}

export function createImportMetaLines(config: Config) {
	const { absoluteEntityMetaFilePath, entity, createMetaImportPath } = config;

	const defaultImportPath = createDefaultMetaImportPath(config);

	const isFolderMeta = fs.statSync(absoluteEntityMetaFilePath).isDirectory();

	const posibleImportPath = createMetaImportPath?.({
		isFolderMeta,

		defaultImportPath,

		...config,
	});

	const metaName = createMetaName(entity);
	const importPath = posibleImportPath || defaultImportPath;

	return [`import {meta as ${metaName}} from '${importPath}';`];
}
