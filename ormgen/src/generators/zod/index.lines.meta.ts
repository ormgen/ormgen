import path from 'path';
import fs from 'fs';

import { Entity } from '~/modelling';

import { createMetaName } from './index.meta';
import { ZodGeneratorConfig } from './index.config';

interface Config {
	entity: Entity;
	absoluteOutputFilePath: string;
	absoluteMetaFilePath: string;
	createMetaImportPath: ZodGeneratorConfig.CreateMetaImportPathFn | undefined;
}

function createDefaultMetaImportPath(config: Config) {
	const { absoluteOutputFilePath, absoluteMetaFilePath } = config;

	const absoluteOutputDir = path.dirname(absoluteOutputFilePath);

	const relativeFilePath = path.relative(absoluteOutputDir, absoluteMetaFilePath);

	return relativeFilePath.split('.').slice(0, -1).join('.');
}

export function createImportMetaLines(config: Config) {
	const { absoluteMetaFilePath, entity, createMetaImportPath } = config;

	const defaultImportPath = createDefaultMetaImportPath(config);

	const isFolderMeta = fs.statSync(absoluteMetaFilePath).isDirectory();

	const posibleImportPath = createMetaImportPath?.({
		isFolderMeta,

		defaultImportPath,

		...config,
	});

	const metaName = createMetaName(entity);
	const importPath = posibleImportPath || defaultImportPath;

	return [`import {meta as ${metaName}} from '${importPath}';`];
}
