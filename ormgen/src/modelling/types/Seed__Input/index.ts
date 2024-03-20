import { Callable } from '~/helpers';

export interface Seed__Input<T extends string> {
	name: T;

	data: Callable<any[]>;
}
