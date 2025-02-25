import { EntityName } from '~/generated';
import { OrmGenerator } from '~/generators';

export interface InstanceConfig {
	cwd?: string;

	search: {
		/**
		 * Where to start looking for everything below.
		 */
		root: string;

		/**
		 * Where to look for entities.
		 * Defaults to 'entities'
		 */
		entities?: string[];

		/**
		 * Where to look for entity-specific enums.
		 * Defaults to ['enums.ts', 'enums/index.ts, 'index.enums.ts', 'index.enums/index.ts']
		 */
		entityEnum?: string[];

		/**
		 * Where to look for entity-specific seed.
		 * Defaults to ['seed.ts', 'seed/index.ts', 'index.seed.ts', 'index.seed/index.ts']
		 */
		entitySeed?: string[];

		/**
		 * Where to look for entity-specific meta data.
		 * Defaults to ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts']
		 */
		entityMeta?: string[];

		/**
		 * Where to look for global enums.
		 */
		globalEnums?: string;

		/**
		 * Where to look for global mixins.
		 */
		globalMixins?: string;
	};

	generators: OrmGenerator[];

	/**
	 * How to format the generated files.
	 */
	formatter?: {
		prettier?: true;

		command?(filePath: string): any;
	};

	/**
	 * Settings for the seeding process.
	 */
	seed?: {
		/**
		 * Only seed empty tables.
		 */
		onlyEmptyTables?: boolean;

		/**
		 * Reset all tables before seeding (except the ones defined in "excludedTables")
		 */
		resetTables?: boolean;

		/**
		 * Exclude these tables from being resetted and seeded.
		 */
		excludedTables?: EntityName[];
	};

	/**
	 * How the generators should handle dates.
	 * - 'string' - The dates should be formatted as strings (default)
	 * - 'date' - The dates should be formatted as Date objects
	 */
	dateMode?: 'string' | 'date';
}
