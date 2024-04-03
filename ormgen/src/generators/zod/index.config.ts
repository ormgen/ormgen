export interface ZodGeneratorConfig {
	/**
	 * The file path to write the generated code to.
	 */
	filePath?: string;

	/**
	 * Where you want to import zod from.
	 */
	zodPackage?: string;

	/**
	 * The output value of the date fields.
	 * - 'string' (default): The date will be a string.
	 * - 'date': The date will be a Date object.
	 *
	 * Both 'string' and 'Date' are allowed as input values.
	 * These will be coerced to the give mode.
	 */
	dateMode?: 'string' | 'date';
}
