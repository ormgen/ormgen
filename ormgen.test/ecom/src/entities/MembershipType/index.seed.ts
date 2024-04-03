import { createSeed } from 'ormgen';

export default createSeed({
	name: 'MembershipType',

	seed: [
		{
			alias: 'FREE',
			name: 'Free',
		},
		{
			alias: 'PREMIUM',
			name: 'Premium',
		},
	],
});
