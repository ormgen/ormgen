import { Entity } from '../Entity';
import { EntityField$ } from '../EntityField$';

type Extends = Required<Omit<Entity, 'fields'>>;

export interface Entity$ extends Extends {
	source: Entity;

	computed: {
		path: string;

		fields: EntityField$ | EntityField$[];
	};
}
