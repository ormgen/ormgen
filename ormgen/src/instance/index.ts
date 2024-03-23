import { OrmgenConfig } from './index.config';
import { sync } from './sync';
import { seed } from './seed';
import { InitConfig } from './init/index.config';
import { init } from './init';

export function createInstance(config: OrmgenConfig) {
	async function runInit() {
		await init({
			cwd: config.cwd || process.cwd(),

			search: {
				entityPatterns: ['entities/*'],
				entityEnumPatterns: ['enums.ts', 'enums/index.ts', 'index.enums.ts', 'index.enums/index.ts'],
				entitySeedPatterns: ['seed.ts', 'seed/index.ts', 'index.seed.ts', 'index.seed/index.ts'],

				globalEnumsPath: 'enums/index.ts',
				globalMixinsPath: 'mixins/index.ts',

				...config.search,
			},
		});
	}

	return {
		async sync() {
			await runInit();
			await sync(config);
		},

		async seed() {
			await runInit();
			await seed(config);
		},
	};
}

export type { InitConfig };
