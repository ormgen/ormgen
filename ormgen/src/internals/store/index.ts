import { Entity__Input, Entity, Enum, Seed__Input, Seed } from '~/modelling/types';

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
	entityInputByPath: new Map<string, Entity__Input>(),

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

const store__seedInputs = {
	seedInputs: new Map<string, Seed__Input>(),

	getSeedInputs() {
		return Array.from(store__seedInputs.seedInputs.values());
	},

	findSeedInput(name: string) {
		return store__seedInputs.seedInputs.get(name);
	},

	getSeedInput(name: string) {
		const seed = store__seedInputs.findSeedInput(name);

		if (!seed) {
			throw new Error(`Seed not found: ${name}`);
		}

		return seed;
	},
};

const store__seed = {
	seeds: new Map<string, Seed>(),

	getSeeds() {
		return Array.from(store__seed.seeds.values());
	},

	findSeed(name: string) {
		return store__seed.seeds.get(name);
	},

	getSeed(name: string) {
		const seed = store__seed.findSeed(name);

		if (!seed) {
			throw new Error(`Seed not found: ${name}`);
		}

		return seed;
	},
};

export const store = {
	...store__enums,

	...store__entityInputs,
	...store__entities,

	...store__seedInputs,
	...store__seed,
};
