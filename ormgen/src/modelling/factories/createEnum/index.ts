import { store } from '~/internals';
import { EnumShape } from '~/modelling/types';

export function createEnum(e: EnumShape) {
	store.enums.set(e.name, e);
}
