import path from 'path';
import { tryImport } from '~/helpers';
import { Entity__Input } from '~/modelling';

export async function initEntityInput(entityFolderPath: string) {
	const imports = await tryImport(entityFolderPath + '/index.ts');

	const folderName = path.basename(entityFolderPath);

	const defaultExport = imports?.default?.default || imports?.default || imports;

	if (!defaultExport) {
		throw new Error(`Entity needs to be the default export at ${entityFolderPath}`);
	}

	const entityInput = defaultExport as Entity__Input;

	if (folderName !== entityInput.name) {
		throw new Error(`Mismatch between folder name (${folderName}) and entity name (${entityInput.name}) at ${entityFolderPath}`);
	}

	return entityInput;
}
