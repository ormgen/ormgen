import { Entity } from '../Entity';
import { EntityFields } from '../EntityField';

export interface Entity$ {
	source: Entity;

	computed: {
		fields: EntityFields;
	};
}
