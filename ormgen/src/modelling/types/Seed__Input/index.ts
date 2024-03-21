import { Callable } from '~/helpers';
import { EntityName } from '~/generated';

export interface Seed__Input<T extends EntityName = EntityName> {
	name: T;

	data: Callable<any[]>;
}
