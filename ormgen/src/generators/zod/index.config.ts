import { Entity } from '~/modelling';

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
	 * A function to create the import path for the meta file.
	 * Defaults to the relative path between the metafile and the output file.
	 */
	createMetaImportPath?: ZodGeneratorConfig.CreateMetaImportPathFn;
}

export namespace ZodGeneratorConfig {
	export interface CreateMetaImportPathConfig {
		defaultImportPath: string;

		isFolderMeta: boolean;

		entity: Entity;

		absoluteOutputFilePath: string;
		absoluteEntityMetaFilePath: string;
	}

	export type CreateMetaImportPathFn = (config: CreateMetaImportPathConfig) => string;
}
