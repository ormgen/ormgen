import { Entity } from '../Entity';
import { Seed__Input } from '../Seed__Input';

export interface Seed<T extends string> extends Seed__Input<T> {
	entity: Entity;

	dependsOnEntities: string[];
}
