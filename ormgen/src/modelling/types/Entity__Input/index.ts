import { EntityFields__Input } from '../EntityField__Input';
import { EntityIndex } from '../EntityIndex';

export interface Entity__Input {
	name: string;

	description?: string;

	id?: Entity__Input.ID;

	fields: EntityFields__Input | EntityFields__Input[];

	indexes?: EntityIndex[];
}

export namespace Entity__Input {
	export type ID = 'id' | 'uid' | 'alias' | null;
}
