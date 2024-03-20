import { CreateType } from './index.create';

import { RelationTargetType, RelationType } from './index.relation';

export namespace EntityField__Input {
	export type Text = CreateType<'text', string, { isPrimary?: boolean }>;

	export type Int = CreateType<'int', number, { isPrimary?: boolean }>;

	export type Boolean = CreateType<'boolean', boolean>;

	export type DateTime = CreateType<'datetime', Date, { defaultNow?: boolean; onUpdate?: boolean }>;

	export type Enum = CreateType<'enum', string, { enum: string }>;

	export type Json = CreateType<'json', any>;

	export type Unknown = CreateType<'unknown', unknown>;

	export type Relation = RelationType;

	export type RelationTarget = RelationTargetType;

	export type ID = Text | Int;

	export type Primitive = Text | Int | Boolean | DateTime | Enum | Json | Unknown;

	export type Any = Primitive | Relation | RelationTarget;
}

export type EntityField__Input = EntityField__Input.Any;

export type EntityFields__Input = Record<string, EntityField__Input>;
