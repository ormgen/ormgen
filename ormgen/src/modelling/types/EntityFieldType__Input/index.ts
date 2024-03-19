import { CreateType } from './index.create';

import { RelationTargetType, RelationType } from './index.relation';

export namespace EntityFieldType__Input {
	export type Text = CreateType<'text', string, { isID?: boolean }>;

	export type Int = CreateType<'int', number, { isID?: boolean }>;

	export type Boolean = CreateType<'boolean', boolean>;

	export type DateTime = CreateType<'datetime', Date, { defaultNow?: boolean; onUpdate?: boolean }>;

	export type Enum = CreateType<'enum', string, { enum: string }>;

	export type Json = CreateType<'json', any>;

	export type Vector = CreateType<'vector', number[]>;

	export type Relation = RelationType;

	export type RelationTarget = RelationTargetType;

	export type ID = Text | Int;

	export type Primitive = Text | Int | Boolean | DateTime | Enum | Json | Vector;

	export type Any = Primitive | Relation | RelationTarget;
}
