import { EntityField__Input__Extra } from '../EntityField__Input__Extra';

export interface Base<Type, DefaultValue, Flag> {
	type: Type;

	isPrimary?: Flag;
	isUnique?: Flag;
	isNullable?: boolean;

	defaultValue?: DefaultValue;

	extra?: EntityField__Input__Extra;
}

interface Base__One<Type, DefaultValue> extends Base<Type, DefaultValue, boolean> {
	isArray?: false;
}

interface Base__Many<Type, DefaultValue> extends Base<Type, DefaultValue, boolean> {
	isArray: true;
}

type Merge<T1, T2> = T1 & T2;

export type CreateType<Type, DefaultValue, Extra = {}> = Merge<Base__One<Type, DefaultValue>, Extra> | Merge<Base__Many<Type, DefaultValue[]>, Extra>;
