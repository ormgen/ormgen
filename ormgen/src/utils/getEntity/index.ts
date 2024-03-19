import { store } from '~/internals';

export function getEntityInput(name: string) {
	return store.getEntityInputs().find((entity) => {
		return entity.name === name;
	});
}

getEntityInput.safe = (name: string) => {
	const entity = getEntityInput(name);

	if (!entity) {
		throw new Error(`Entity not found: ${name}`);
	}

	return entity;
};

export function getEntity(name: string) {
	return store.getEntities().find((entity) => {
		return entity.name === name;
	});
}

getEntity.safe = (name: string) => {
	const entity = getEntity(name);

	if (!entity) {
		throw new Error(`Entity not found: ${name}`);
	}

	return entity;
};
