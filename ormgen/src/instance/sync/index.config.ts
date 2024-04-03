import { OrmGenerator } from '~/generators';
import { InitConfig } from '../init';

type Search = Partial<InitConfig> & { root: string };

export interface SyncConfig {
	cwd?: string;

	search: Search;

	generators: OrmGenerator[];
}
