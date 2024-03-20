import path from 'path';
import { Seed__Input } from '~/modelling';

export async function initEntitySeed(entityFolderPath: string, entitySeedPath: string) {
	const imports = await import(entitySeedPath);

	const entityName = path.basename(entityFolderPath);

	const defaultExport = imports.default.default;

	if (!defaultExport) {
		throw new Error(`Entity seed needs to be the default export at ${entitySeedPath}`);
	}

	const entitySeed = defaultExport as Seed__Input<string>;

	if (entityName !== entitySeed.name) {
		throw new Error(`Mismatch between entity name (${entityName}) and entity seed name (${entitySeed.name}) at ${entitySeedPath}`);
	}

	return entitySeed;
}
