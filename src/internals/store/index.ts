import { Entity$, Enum } from '~/modelling/types';

export const store = {
	enums: new Map<string, Enum>(),

	entities: new Map<string, Entity$>(),

	getEnums() {
		return Array.from(store.enums.values());
	},

	getEntities() {
		return Array.from(store.entities.values());
	},

	// metas: new Map<string, Record<string, unknown>>(),

	// seed: new Map<string, Record<string, unknown>>(),

	// mixins: new Map<string, Record<string, unknown>>(),
};
