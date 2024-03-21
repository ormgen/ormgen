import { Callable } from '~/helpers/utils';
import { EntityName, AllEntitySeeds } from '~/generated';

export interface Seed__Input<T extends EntityName = EntityName> {
	name: T;

	data: Callable<AllEntitySeeds[T][]>;
}
