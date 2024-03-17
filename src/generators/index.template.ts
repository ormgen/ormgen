import { Entity$, Enum } from 'ormgen';
import { Promisify } from '~/helpers';

export interface OrmGenerator {
	onEnum(e: Enum): Promisify<any>;
	onEntity(entity: Entity$): Promisify<any>;
}
