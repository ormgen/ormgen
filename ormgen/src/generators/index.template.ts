import { Entity, EnumShape, Seed } from '~/modelling';
import { Promisable } from '~/helpers/utils';

export interface OrmGenerator {
	name: string;

	sync?: {
		onStart?(): Promisable<any>;

		onEnums?(config: { enums: EnumShape[] }): Promisable<any>;
		onEnum?(config: { enumShape: EnumShape; enums: EnumShape[] }): Promisable<any>;

		onEntities?(config: { entities: Entity[] }): Promisable<any>;
		onEntity?(config: { entity: Entity; entities: Entity[]; absoluteEntityMetaFilePath: string | undefined }): Promisable<any>;

		onMetaFile?(config: { absoluteEntityMetaFilePath: string; entity: Entity }): Promisable<any>;

		onWrite?(): Promisable<any>;
		onComplete?(): Promisable<any>;
	};

	seed?: {
		onStart?(): Promisable<any>;

		onEntity?(seed: Seed): Promisable<any>;
	};
}
