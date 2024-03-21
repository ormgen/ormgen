import { EntityName } from '~/generated';
import { Entity } from '../Entity';
import { Seed__Input } from '../Seed__Input';

export interface Seed<T extends EntityName = EntityName> extends Seed__Input<T> {
	entity: Entity;

	dependsOnEntities: string[];
}
