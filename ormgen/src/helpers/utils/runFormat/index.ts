import { execSync } from 'child_process';
import { configStore } from '~/internals/configStore';

export function runFormatSync(filePath: string) {
	const { prettier = true, command } = configStore.instance?.formatter || {};

	if (command) {
		return execSync(command(filePath), { stdio: 'inherit' });
	}

	if (prettier) {
		return execSync(`npx prettier --write "${filePath}" --with-node-modules --log-level warn`, { stdio: 'inherit' });
	}
}
