import { Entity } from '../Entity';
// import { EntityField$ } from '../EntityField$';

export interface Entity$ {
	source: Entity;

	computed: {
		folderPath: string;
		folderName: string;

		// fields: EntityField$ | EntityField$[];
	};
}
