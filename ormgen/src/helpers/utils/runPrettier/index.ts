import { execSync } from 'child_process';

export function runPrettierSync(filePath: string) {
	return execSync(`npx prettier --write ${filePath} --log-level=silent`, { stdio: 'inherit' });
}
