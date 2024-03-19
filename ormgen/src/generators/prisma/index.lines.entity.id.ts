import { Entity } from '~/modelling';

export function createIdField(entity: Entity): string {
	switch (entity.id) {
		case 'id':
			return 'id Int @id @default(autoincrement())';
		case 'uid':
			return 'uid String @id';
		case 'alias':
			return 'alias String @id';
	}

	return '';
}
