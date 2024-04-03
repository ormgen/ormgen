export interface ZodGeneratorConfig {
	/**
	 * The file path to write the generated code to.
	 */
	filePath?: string;

	/**
	 * Where you want to import zod from.
	 */
	zodPackage?: string;
}
