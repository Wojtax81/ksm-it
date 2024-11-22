import { z } from 'zod'

export const ContactEmailValidator = z.object({
	name: z.string().min(2, { message: 'Name must contain at least 2 characters' }),
	email: z.string().email({
		message: 'Please provide a valid email address'
	}),
	phone: z.string().min(3, {
		message: 'Please provide a valid phone number'
	}),
	message: z.string().min(1, {
		message: 'Please provide a message'
	})
})

export type ContactEmailPayload = z.infer<typeof ContactEmailValidator>
