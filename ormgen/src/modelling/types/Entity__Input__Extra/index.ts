import { PartialRecord } from '~/helpers';
import { EntityFieldType } from '~/modelling';

export interface Entity__Input__Extra {
	zod?: {};
	prisma?: {
		customAttributes?: PartialRecord<EntityFieldType.Primitive, string>;
	};
}
