export type Factorized<T, Params = void> = T | ((params: Params) => T);
