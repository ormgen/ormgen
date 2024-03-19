import { store } from '~/internals';
import { Entity__Input, Entity } from '~/modelling';
import { createEntityFields } from '../createEntityFields';
import { RunConfig } from '../../index.config';

export async function createEntity(config: RunConfig, input: Entity__Input, entityFolderPaths: string[]): Promise<Entity> {
	const { root } = config.search;

	const folderPath = entityFolderPaths.find((folderPath) => {
		return folderPath.endsWith('/' + input.name);
	});

	if (!folderPath) {
		throw new Error(`Entity folder path not found for ${input.name}`);
	}

	const entity: Entity = {
		...input,

		$input: input,

		absolutePath: folderPath,

		fields: createEntityFields(input),
	};

	store.entities.set(entity.name, entity);

	return entity;
}
