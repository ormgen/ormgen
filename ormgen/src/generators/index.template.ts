import { Entity, Enum, Seed } from '~/modelling';
import { Promisable } from '~/helpers/utils';

export interface OrmGenerator {
	name: string;

	sync?: {
		onStart?(): Promisable<any>;

		onEnums?(enums: Enum[]): Promisable<any>;
		onEnum?(e: Enum, enums: Enum[]): Promisable<any>;

		onEntities?(entities: Entity[]): Promisable<any>;
		onEntity?(entity: Entity, entities: Entity[]): Promisable<any>;

		onMetaFile?(entityMetaFilePath: string, entity: Entity): Promisable<any>;

		onWrite?(): Promisable<any>;
		onComplete?(): Promisable<any>;
	};

	seed?: {
		onStart?(): Promisable<any>;

		onEntity?(seed: Seed): Promisable<any>;
	};
}
