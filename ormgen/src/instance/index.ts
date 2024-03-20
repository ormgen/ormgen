import { init } from '~/instance/init';
import { InstanceConfig } from './index.config';
import { sync } from './sync';
import { seed } from './seed';

export function createInstance(config: InstanceConfig) {
	async function runInit() {
		await init({
			cwd: config.cwd || process.cwd(),

			search: {
				entities: ['entities/*'],
				entityEnum: ['enums.ts', 'enums/index.ts', 'index.enums.ts', 'index.enums/index.ts'],
				entitySeed: ['seed.ts', 'seed/index.ts', 'index.seed.ts', 'index.seed/index.ts'],

				globalEnums: ['enums/index.ts'],
				globalMixins: ['mixins/index.ts'],

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
