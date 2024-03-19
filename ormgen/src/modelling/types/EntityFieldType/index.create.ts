import { Entity__Input } from '../Entity__Input';

export type CreateType<T, K = {}> = T &
	K & {
		$name: string;
		$input: T | null; // Null if the field is auto-generated
		$entityInput: Entity__Input; // The field will always have a corresponding entity input.
	};
