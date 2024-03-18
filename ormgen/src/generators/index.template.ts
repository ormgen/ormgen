import { Entity$, Enum } from '~/modelling';
import { Promisable } from '~/helpers';

export abstract class OrmGenerator {
	abstract onEnum(e: Enum): Promisable<any>;
	abstract onEntity(entity: Entity$, entities: Entity$[]): Promisable<any>;
	abstract onWrite(): Promisable<any>;
	abstract onComplete(): Promisable<any>;
}
