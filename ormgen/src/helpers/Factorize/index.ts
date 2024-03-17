export type Factorized<T, Params = void> = T | ((params: Params) => T);

export function getFactorized<T, Params>(t: Factorized<T, Params>, params: Params): T {
	if (t instanceof Function) {
		return t(params);
	}

	return t;
}
