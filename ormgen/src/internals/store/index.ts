import { Entity__Input, Entity, Enum } from '~/modelling/types';

const store__enums = {
	enums: new Map<string, Enum>(),

	getEnums() {
		return Array.from(store__enums.enums.values());
	},

	findEnum(name: string) {
		return store__enums.enums.get(name);
	},

	getEnum(name: string) {
		const e = store__enums.findEnum(name);

		if (!e) {
			throw new Error(`Enum not found: ${name}`);
		}

		return e;
	},
};

const store__entityInputs = {
	entityInputs: new Map<string, Entity__Input>(),

	getEntityInputs() {
		return Array.from(store__entityInputs.entityInputs.values());
	},

	findEntityInput(name: string) {
		return store__entityInputs.entityInputs.get(name);
	},

	getEntityInput(name: string) {
		const entity = store__entityInputs.findEntityInput(name);

		if (!entity) {
			throw new Error(`Entity not found: ${name}`);
		}

		return entity;
	},
};

const store__entities = {
	entities: new Map<string, Entity>(),

	getEntities() {
		return Array.from(store__entities.entities.values());
	},

	findEntity(name: string) {
		return store__entities.entities.get(name);
	},

	getEntity(name: string) {
		const entity = store__entities.findEntity(name);

		if (!entity) {
			throw new Error(`Entity not found: ${name}`);
		}

		return entity;
	},
};

export const store = {
	...store__enums,
	...store__entityInputs,
	...store__entities,

	// metas: new Map<string, Record<string, unknown>>(),

	// seed: new Map<string, Record<string, unknown>>(),

	// mixins: new Map<string, Record<string, unknown>>(),
};
