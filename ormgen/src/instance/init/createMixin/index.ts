import { tryImport } from '~/helpers';
import { store } from '~/internals';
import { Mixins } from '~/modelling';

export async function createMixins(mixinsFilePath: string): Promise<Mixins> {
	const imports = await tryImport(mixinsFilePath);

	const mixins: Mixins = {
		filePath: mixinsFilePath,
		content: imports?.default || imports,
	};

	store.mixins = mixins;

	return mixins;
}
