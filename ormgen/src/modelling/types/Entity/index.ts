import { Entity__Input } from '../Entity__Input';
import { EntityFields } from '../EntityField';

export interface Entity extends Entity__Input {
	$input: Entity__Input;

	folderPath: string;

	fields: EntityFields;
}
