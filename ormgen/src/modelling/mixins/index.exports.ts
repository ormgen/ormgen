import { EntityField__Input } from '../types';

export function $createdAtField(): EntityField__Input {
	return { type: 'datetime', defaultNow: true };
}

export function $updatedAtField(): EntityField__Input {
	return { type: 'datetime', defaultNow: true, onUpdate: true };
}
