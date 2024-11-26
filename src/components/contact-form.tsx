'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactEmailPayload, ContactEmailValidator } from '@/lib/validators/contactForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { DeepRequired, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Home } from '../../sanity.types'
import { MarkedText } from './marked-text'
import H3 from './ui/typography/h3'

type Props = {
	heading?: string
	translations: DeepRequired<Home>['contact']['form']
}

export const ContactForm = ({ heading, translations }: Props) => {
	const { fields, notification, privacyPolicy, submit } = translations

	const customErrorMap: z.ZodErrorMap = (error, ctx) => {
		const field = error.path[0] as keyof typeof translations.fields

		const errorMessage = translations.fields[field]?.error
		if (errorMessage) return { message: errorMessage }

		return { message: ctx.defaultError }
	}

	const [isPending, setIsPending] = useState(false)

	const form = useForm<ContactEmailPayload>({
		resolver: zodResolver(ContactEmailValidator, { errorMap: customErrorMap }),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: ''
		}
	})

	const sendEmail = async (values: ContactEmailPayload) => {
		const payload: ContactEmailPayload = {
			name: values.name,
			email: values.email,
			message: values.message,
			phone: values.phone
		}

		try {
			const res = await fetch('/api/contactForm', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			})

			if (!res.ok) throw new Error('Could not send email')

			toast.success(notification.success)
			form.reset()
		} catch (err) {
			console.log(err)
			toast.error(notification.error)
		}
	}

	const handleSubmit = async (values: ContactEmailPayload) => {
		setIsPending(true)
		await sendEmail(values)
		setIsPending(false)
	}

	return (
		<div>
			{heading && <H3 className='mb-4'>{heading}</H3>}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(e => handleSubmit(e))} className='flex flex-col gap-y-3'>
					<div className='flex flex-col gap-3 md:flex-row'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem className='grow'>
									<FormControl>
										<Input isForm {...field} label={fields.name.label} className='bg-secondary' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem className='grow'>
									<FormControl>
										<Input isForm {...field} label={fields.phone.label} className='bg-secondary' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className=''>
								<FormControl>
									<Input isForm {...field} label={fields.email.label} className='bg-secondary' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										isForm
										{...field}
										label={fields.message.label}
										className='h-full min-h-[120px] bg-secondary'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='flex flex-col-reverse gap-4 md:flex-col'>
						<p className='text-sm text-muted-foreground'>
							<MarkedText
								text={privacyPolicy}
								Wrapper={text => (
									<Link href={'/privacy-policy'} key={'privacy-link'} className='font-medium hover:underline'>
										{text}
									</Link>
								)}
							/>
						</p>

						<Button
							variant={'primaryGradient'}
							size={'lg'}
							disabled={isPending}
							type='submit'
							className='h-auto gap-3 py-1 pl-1 pr-6'>
							<div className='flex items-center justify-center rounded-full bg-background p-3 text-foreground'>
								{!isPending && <ArrowRightIcon className='!size-5' />}
								{isPending && <Loader2 className='!size-5 animate-spin' />}
							</div>
							<span className='grow text-base font-medium leading-[1.1]'>{submit}</span>
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}
