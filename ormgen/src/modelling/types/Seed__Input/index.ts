import { Callable } from '~/helpers/utils';
import { EntityName, AllEntitySeeds } from '~/generated';

type SeedFn = () => Promise<void>;
type SeedDataFn<T extends EntityName> = Callable<AllEntitySeeds[T][]>;

export interface Seed__Input<T extends EntityName = EntityName> {
	name: T;

	seed: SeedFn | SeedDataFn<T>;
}
