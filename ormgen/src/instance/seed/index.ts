import { store } from '~/internals';

import { InstanceConfig } from '../index.config';

export async function seed(config: InstanceConfig) {
	console.log(store.getEntities().length);
}
