import { Arrayable } from '../Arrayable';

export function flattenArrayable<T extends object>(t: Arrayable<T>): T {
	if (Array.isArray(t)) {
		return t.reduce((acc, curr) => {
			return { ...acc, ...curr };
		}, {} as T);
	}

	return t;
}
