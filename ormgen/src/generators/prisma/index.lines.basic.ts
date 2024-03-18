import { PrismaConfig } from './index.config';

function createDatasourceLines(config: PrismaConfig): string[] {
	const { provider, url, extensions, extra } = config.datasource;

	return [
		// <>
		'datasource db {',
		`\tprovider = ${provider}`,
		url && `\turl = ${url}`,
		extensions && `\textensions = [${extensions.join()}]`,
		extra && `\t${extra}`,
		'}',
	].filter(Boolean) as string[];
}

function createClientGeneratorLines(config: PrismaConfig): string[] {
	const { name = 'client', provider = 'prisma-client-js', binaryTargets, previewFeatures, extra } = config.clientGenerator || {};

	return [
		// <>
		`generator ${name} {`,
		`\tprovider = "${provider}"`,
		binaryTargets && `\tbinaryTargets = [${binaryTargets.join()}]`,
		previewFeatures && `\tpreviewFeatures = [${previewFeatures.join()}]`,
		extra && `\t${extra}`,
		'}',
	].filter(Boolean) as string[];
}

export function createBasicLines(config: PrismaConfig): string[] {
	return [...createDatasourceLines(config), ...createClientGeneratorLines(config)];
}
