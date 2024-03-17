import { CreateType } from './index.create';

import { Relation as __Relation } from './index.relation';

export namespace EntityFieldType {
	export type Text = CreateType<'text', string>;

	export type Int = CreateType<'int', number>;

	export type Boolean = CreateType<'boolean', boolean>;

	export type DateTime = CreateType<'datetime', Date, { defaultNow?: boolean; onUpdate?: boolean }>;

	export type Enum = CreateType<'enum', string, { enum: string }>;

	export type Json = CreateType<'json', any>;

	export type Vector = CreateType<'vector', number[]>;

	export type Relation = __Relation;

	export type ID = Text | Int;

	export type Primitive = Text | Int | Boolean | DateTime | Enum | Json | Vector;

	export type Any = Text | Int | Boolean | DateTime | Enum | Json | Vector | Relation;
}
