import { EntityFieldType } from '../EntityFieldType';

export type EntityField = EntityFieldType.Any;

export type EntityFields = Record<string, EntityField>;
