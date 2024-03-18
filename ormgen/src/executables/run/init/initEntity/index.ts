import path from 'path';
import { Entity } from '~/modelling';

export async function initEntity(entityFolderPath: string) {
	const imports = await import(entityFolderPath + '/index.ts');

	const folderName = path.basename(entityFolderPath);

	const defaultExport = imports.default.default;

	if (!defaultExport) {
		throw new Error(`Entity needs to be the default export at ${entityFolderPath}`);
	}

	const entity = defaultExport as Entity;

	if (folderName !== entity.name) {
		throw new Error(`Mismatch between folder name (${folderName}) and entity name (${entity.name}) at ${entityFolderPath}`);
	}

	return entity;
}
