import { createSeed } from 'ormgen';

export default createSeed({
	name: 'User',

	seed: [
		{
			uid: 'user-1',
			email: '',
			name: 'John Doe',
			passwordHash: '',
			lastLogin: new Date().toISOString(),
		},
	],
});
