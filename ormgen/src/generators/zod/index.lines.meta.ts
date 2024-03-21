import path from 'path';

import { Entity } from '~/modelling';

import { createMetaName } from './index.meta';

interface Config {
	absoluteOutputFilePath: string;
	absoluteMetaFilePath: string;
	entity: Entity;
}

export function createImportMetaLines(config: Config) {
	const { absoluteOutputFilePath, absoluteMetaFilePath, entity } = config;

	const metaName = createMetaName(entity);

	const absoluteOutputDir = path.dirname(absoluteOutputFilePath);

	const relativeFilePath = path.relative(absoluteOutputDir, absoluteMetaFilePath);

	const importPath = relativeFilePath.split('.').slice(0, -1).join('.');

	return [`import {meta as ${metaName}} from '${importPath}';`];
}
