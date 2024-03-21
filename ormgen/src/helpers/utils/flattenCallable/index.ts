import { Callable } from '../Callable';

export function flattenCallable<T, Params>(t: Callable<T, Params>, params: Params): T {
	if (t instanceof Function) {
		return t(params);
	}

	return t;
}
