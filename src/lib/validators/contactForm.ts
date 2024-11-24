import { z } from 'zod'

export const ContactEmailValidator = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string().min(1)
})

export type ContactEmailPayload = z.infer<typeof ContactEmailValidator>
