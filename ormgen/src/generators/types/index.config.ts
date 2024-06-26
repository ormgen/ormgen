import { PartialRecord } from '~/helpers';
import { EntityFieldType } from '~/modelling';

export interface TypesGeneratorConfig {
	nodeModulesPath?: string;

	customTypes?: PartialRecord<EntityFieldType.Primitive, string>;
}
