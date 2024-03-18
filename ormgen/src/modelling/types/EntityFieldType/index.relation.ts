export interface RelationType {
	type: 'relation';

	isUnique?: boolean;
	isNullable?: boolean;

	onDelete: 'Cascade' | 'SetNull' | 'Restrict';

	/**
	 * Some ORM's gives the relations names in order to match them between entities.
	 */
	relationName?: string;

	/**
	 * The name of the entity you want connect with.
	 */
	targetEntityName: string;

	/**
	 * The name of the field in the target entity.
	 *
	 * Default to the id field
	 */
	targetEntityFieldName?: string;

	/**
	 * How many of the target model can this model connect to?
	 * One or many?
	 *
	 * Defaults to 'many'
	 */
	targetMode?: 'one' | 'many';
}
