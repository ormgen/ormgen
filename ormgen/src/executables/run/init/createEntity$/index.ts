import path from 'path';
import { Entity, Entity$ } from '~/modelling';

async function importEntity(entityFolderPath: string) {
	const imports = await import(entityFolderPath + '/index.ts');

	const defaultExport = imports.default.default;

	if (!defaultExport) {
		throw new Error(`Entity needs to be the default export at ${entityFolderPath}`);
	}

	return defaultExport as Entity;
}

export async function createEntity$(entityFolderPath: string): Promise<Entity$> {
	const source = await importEntity(entityFolderPath);

	const folderName = path.basename(entityFolderPath);

	if (folderName !== source.name) {
		throw new Error(`Mismatch between folder name (${folderName}) and entity name (${source.name}) at ${entityFolderPath}`);
	}

	return {
		source,

		computed: {
			folderPath: entityFolderPath,
		},
	};
}
