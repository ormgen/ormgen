import { Entity__Input, Entity, Enum } from '~/modelling/types';

export const store = {
	enums: new Map<string, Enum>(),

	entityInputs: new Map<string, Entity__Input>(),
	entities: new Map<string, Entity>(),

	getEnums() {
		return Array.from(store.enums.values());
	},

	getEntityInputs() {
		return Array.from(store.entityInputs.values());
	},

	getEntities() {
		return Array.from(store.entities.values());
	},

	// metas: new Map<string, Record<string, unknown>>(),

	// seed: new Map<string, Record<string, unknown>>(),

	// mixins: new Map<string, Record<string, unknown>>(),
};
