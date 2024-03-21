import { store } from '~/internals';

import { OrmgenConfig } from '../index.config';
import { findTargettedEntities } from '~/helpers';

function getSortedSeeds() {
	const seeds = store.getSeeds();

	return seeds.sort((a, b) => {
		const aTargetEntities = findTargettedEntities(a.entity);
		const aTargetEntityNames = aTargetEntities.map((e) => e.name);

		const bTargetEntities = findTargettedEntities(b.entity);
		const bTargetEntityNames = bTargetEntities.map((e) => e.name);

		if (aTargetEntityNames.includes(b.entity.name)) {
			return 1;
		}

		if (bTargetEntityNames.includes(a.entity.name)) {
			return -1;
		}

		return 0;
	});
}

export async function seed(config: OrmgenConfig) {
	for (const gen of config.generators) {
		for (const seed of getSortedSeeds()) {
			await gen.seed?.onEntity?.(seed);
		}
	}
}
