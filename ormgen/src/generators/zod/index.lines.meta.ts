import { Entity } from '~/modelling';
import { ZodGenerator } from '.';
import path from 'path';
import { createMetaName } from './index.meta';

export function createImportMetaLines(self: ZodGenerator, metaFilePath: string, entity: Entity) {
	const metaName = createMetaName(entity);

	const absoluteOutputDir = path.dirname(self.outputFilePath.absolute);

	const relativeFilePath = path.relative(absoluteOutputDir, metaFilePath);

	const importPath = relativeFilePath.split('.').slice(0, -1).join('.');

	return [`import * as ${metaName} from '${importPath}';`];
}
