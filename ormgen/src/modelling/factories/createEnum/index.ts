import { store } from '~/internals';
import { Enum } from '~/modelling/types';

export function createEnum(e: Enum) {
	store.enums.set(e.name, e);
}
