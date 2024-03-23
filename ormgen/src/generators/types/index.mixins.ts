import { store } from '~/internals';

export function createMixinLines(): string[] {
	const { filePath } = store.mixins || {};

	const importDefaultMixins = `import { DefaultMixins } from 'ormgen'`;
	const importExternalMixins = `import * as ExternalMixins from '${filePath}'`;

	const exportExternalMixins = filePath ? 'typeof ExternalMixins' : 'never';
	const exportMixins = `export type Mixins = DefaultMixins & ${exportExternalMixins}`;

	return [importDefaultMixins, filePath && importExternalMixins, exportMixins].filter(Boolean) as string[];
}
