import { configStore } from '~/internals';

function createDatasourceLines(): string[] {
	const { provider, url, extensions, extra } = configStore.prisma!.datasource;

	return [
		// <>
		'datasource db {',
		`\tprovider = ${provider}`,
		url && `\turl = ${url}`,
		extensions && `\textensions = [${extensions.join()}]`,
		extra && `\t${extra}`,
		'}',
	].filter(Boolean);
}

function createClientGeneratorLines(): string[] {
	const { name = 'client', provider = 'prisma-client-js', binaryTargets, previewFeatures, extra } = configStore.prisma!.clientGenerator || {};

	return [
		// <>
		`generator ${name} {`,
		`\tprovider = "${provider}"`,
		binaryTargets && `\tbinaryTargets = [${binaryTargets.join()}]`,
		previewFeatures && `\tpreviewFeatures = [${previewFeatures.join()}]`,
		extra && `\t${extra}`,
		'}',
	].filter(Boolean);
}

export function createBasicLines(): string[] {
	return [...createDatasourceLines(), ...createClientGeneratorLines()];
}
