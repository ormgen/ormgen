export interface InitConfig {
	cwd: string;

	search: {
		/**
		 * Where to start looking for everything below.
		 */
		root: string;

		/**
		 * Where to look for entities.
		 * Defaults to 'entities'
		 */
		entityPatterns: string[];

		/**
		 * Where to look for entity-specific enums.
		 * Defaults to ['enums.ts', 'enums/index.ts, 'index.enums.ts', 'index.enums/index.ts']
		 */
		entityEnumPatterns: string[];

		/**
		 * Where to look for entity-specific seed.
		 * Defaults to ['seed.ts', 'seed/index.ts', 'index.seed.ts', 'index.seed/index.ts']
		 */
		entitySeedPatterns: string[];

		/**
		 * Where to look for entity-specific meta data.
		 * Defaults to ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts']
		 */
		entityMetaPatterns?: string[];

		/**
		 * Where to look for global enums.
		 */
		globalEnumsPath: string;

		/**
		 * Where to look for global mixins.
		 */
		globalMixinsPath: string;
	};
}
