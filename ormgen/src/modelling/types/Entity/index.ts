import { Entity__Input__Extra } from '../Entity__Input__Extra';
import { Entity__Input } from '../Entity__Input';
import { EntityFields } from '../EntityField';

export interface Entity extends Entity__Input {
	$input: Entity__Input;

	absolutePath: string;

	fields: EntityFields;

	extra?: Entity__Input__Extra;
}
