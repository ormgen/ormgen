import { EntityName } from '~/generated';
import { EntityFields__Input } from '../EntityField__Input';
import { EntityIndex } from '../EntityIndex';
import { Entity__Input__Extra } from '../Entity__Input__Extra';

export interface Entity__Input {
	name: EntityName | string;

	description?: string;

	id: Entity__Input.ID;
	idMeta?: Entity__Input.IdMeta;

	fields: EntityFields__Input | EntityFields__Input[];

	indexes?: EntityIndex[];

	extra?: Entity__Input__Extra;
}

export namespace Entity__Input {
	export type ID = 'id' | 'uid' | 'alias' | null;

	export interface IdMeta {
		autoIncrement?: boolean;
	}
}
