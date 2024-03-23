import fs from 'fs-extra';

export async function tryImport(filePath: string) {
	const exists = await fs.exists(filePath);

	if (exists) {
		try {
			return import(filePath);
		} catch (e) {
			console.error(`Error importing file: ${filePath}`);
		}
	} else {
		console.error(`File does not exist: ${filePath}`);
	}
}
