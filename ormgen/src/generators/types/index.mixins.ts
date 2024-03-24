import path from 'path';
import { store } from '~/internals';

function getMixinsFilePath() {
	const { filePath } = store.mixins || {};

	if (!filePath) {
		return null;
	}

	const uri = path.parse(filePath);

	return path.join(uri.dir, uri.name);
}

export function createMixinLines(): string[] {
	const filePath = getMixinsFilePath();

	const importDefaultMixins = `import { DefaultMixins } from 'ormgen'`;
	const importExternalMixins = `import * as ExternalMixins from '${filePath}'`;

	const exportExternalMixins = filePath ? 'typeof ExternalMixins' : 'never';
	const exportMixins = `export type Mixins = DefaultMixins & ${exportExternalMixins}`;

	return [importDefaultMixins, filePath && importExternalMixins, exportMixins].filter(Boolean);
}
