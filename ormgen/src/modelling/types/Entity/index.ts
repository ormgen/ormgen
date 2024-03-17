import { EntityFields } from '../EntityField';
import { EntityIndex } from '../EntityIndex';

export interface Entity {
	name: string;

	description?: string;

	id?: Entity.ID;

	fields: EntityFields | EntityFields[];

	indexes?: EntityIndex[];
}

export namespace Entity {
	export type ID = 'id' | 'uid' | 'alias' | null;
}
