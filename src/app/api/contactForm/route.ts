import ContactEmailTemplate from '@/components/contact-email-template'
import { siteConfig } from '@/config/site'
import { mailTransporter } from '@/lib/nodemailer/transporter'
import { ContactEmailValidator } from '@/lib/validators/contactForm'
import { render } from '@react-email/render'
import { z } from 'zod'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const { name, email, message, phone } = ContactEmailValidator.parse(body)

		const plainText = `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`
		const emailHtml = await render(ContactEmailTemplate({ name, email, message, phone }))

		const data = await mailTransporter.sendMail({
			from: siteConfig.email,
			to: siteConfig.email,
			subject: `Contact form - ${email}`,
			text: plainText,
			html: emailHtml
		})

		return new Response(JSON.stringify(data))
	} catch (error) {
		console.log(error)
		if (error instanceof z.ZodError) {
			return new Response('Invalid POST request data passed', { status: 422 })
		}

		return new Response('Could not send email', { status: 500 })
	}
}
