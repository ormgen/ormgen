import { Entity$, Enum } from '~/modelling';
import { Promisify } from '~/helpers';

export abstract class OrmGenerator {
	abstract onEnum(e: Enum): Promisify<any>;
	abstract onEntity(entity: Entity$, entities: Entity$[]): Promisify<any>;
	abstract onWrite(): Promisify<any>;
	abstract onComplete(): Promisify<any>;
}
