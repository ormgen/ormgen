import { init } from '~/instance/init';
import { OrmgenConfig } from './index.config';
import { sync } from './sync';
import { seed } from './seed';
import { typesGenerator } from '~/generators/types';

function createEnhancedConfig(config: OrmgenConfig): OrmgenConfig {
	const { types = {} } = config;

	const typesGen = typesGenerator(types);

	const generators = [...config.generators, typesGen];

	return { ...config, generators };
}

export function createInstance(config: OrmgenConfig) {
	const enhancedConfig = createEnhancedConfig(config);

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
			await sync(enhancedConfig);
		},

		async seed() {
			await runInit();
			await seed(enhancedConfig);
		},
	};
}
