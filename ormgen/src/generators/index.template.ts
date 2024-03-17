import { Entity, Entity$, Enum } from '~/modelling';
import { Promisify } from '~/helpers';

export interface OrmGenerator {
	onEnum(e: Enum): Promisify<any>;
	onEntity(entity: Entity): Promisify<any>;
}
