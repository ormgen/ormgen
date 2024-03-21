import { Callable } from '~/helpers';
import { EntityName, Entities } from '~/generated';

export interface Seed__Input<T extends EntityName = EntityName> {
	name: T;

	data: Callable<Entities[T][]>;
}
