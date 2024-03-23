import { OrmGenerator } from '~/generators';
import { InitConfig } from '~/index';

type Search = Partial<InitConfig> & { root: string };

export interface SyncConfig {
	cwd?: string;

	search: Search;

	generators: OrmGenerator[];
}
