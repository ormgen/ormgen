export interface InitConfig {
	cwd: string;

	search: {
		root: string;

		entities: string[];

		entityEnum: string[];

		entitySeed: string[];

		globalEnums: string[];

		globalMixins: string[];
	};
}
