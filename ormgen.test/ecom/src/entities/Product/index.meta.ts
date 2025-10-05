import { z } from 'zod';

export const meta = {
	attributes: z.union([
		// <>
		z.object({ material: z.string() }),
		z.object({ resolution: z.number() }),
	]),

	stockQuantity: z.number().int().min(0).max(1_000_000),
};
