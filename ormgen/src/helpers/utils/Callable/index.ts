export type Callable<T, Params = void> = T | ((params: Params) => T);
