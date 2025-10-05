import { EntityField__Input } from '../EntityField__Input';
import { Entity__Input } from '../Entity__Input';
import { CreateType } from './index.create';

export namespace EntityField {
	export type Text = CreateType<EntityField__Input.Text>;

	export type Int = CreateType<EntityField__Input.Int>;

	export type Boolean = CreateType<EntityField__Input.Boolean>;

	export type DateTime = CreateType<EntityField__Input.DateTime>;

	export type Enum = CreateType<EntityField__Input.Enum>;

	export type Json = CreateType<EntityField__Input.Json>;

	export type Unknown = CreateType<EntityField__Input.Unknown>;

	export type Relation = CreateType<EntityField__Input.Relation, { $targetEntityInput: Entity__Input }>;

	export type RelationKey = CreateType<
		EntityField__Input.Text | EntityField__Input.Int,
		{
			$isRelationKey: true,
			$targetEntityInput: Entity__Input;
			$targetEntityField: EntityField__Input.Relation;
		}
	>;

	export type RelationTarget = CreateType<
		EntityField__Input.RelationTarget,
		{
			$sourceEntity: Entity__Input;
			$sourceEntityField: EntityField__Input.Relation;
		}
	>;

	export type ID = Text | Int;

	export type Primitive = Text | Int | Boolean | DateTime | Enum | Json | Unknown;

	export type Any = Primitive | Relation | RelationTarget | RelationKey;
}

export type EntityField = EntityField.Any;

export type EntityFields = Record<string, EntityField>;
