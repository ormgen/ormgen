import { EntityField } from '../types';

export function $createdAtField(): EntityField {
	return { type: 'datetime', defaultNow: true };
}

export function $updatedAtField(): EntityField {
	return { type: 'datetime', defaultNow: true, onUpdate: true };
}
