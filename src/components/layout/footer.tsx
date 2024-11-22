import { siteConfig } from '@/config/site'
import Link from 'next/link'
import Wordmark from '../../../public/assets/brand/wordmark.svg'

type Props = {}

const FOOTER_LINKS = [
	{
		title: 'Home',
		href: '/'
	},
	{
		title: 'Blog',
		href: '/blog'
	},
	{
		title: 'Privacy Policy',
		href: '/privacy-policy'
	}
]

export const Footer = (props: Props) => {
	return (
		<footer className='fixed bottom-0 left-0 right-0 z-0 bg-foreground pt-16 text-background'>
			<div className='grid-container'>
				<div className='mb-16 flex flex-col gap-y-12 md:flex-row md:justify-between lg:mb-20'>
					<div>
						<div>
							<Wordmark className='h-16 w-auto lg:h-[4.5rem]' />
						</div>
						<p className='mb-6 mt-4 max-w-xs text-muted-foreground'>
							Your trusted partner for reliable SAP support and optimization.
						</p>
						<Link href={`mailto:${siteConfig.email}`} className='text-lg hover:underline'>
							{siteConfig.email}
						</Link>
					</div>

					<div>
						<p className='mb-3 text-muted-foreground'>See More</p>
						<ul className='space-y-3'>
							{FOOTER_LINKS.map(link => (
								<li key={link.title}>
									<Link
										href={link.href}
										className='bg-gradient-secondary bg-clip-text text-3xl font-extrabold leading-none text-transparent decoration-primary hover:underline lg:text-4xl'>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='-mb-2 hidden md:block'>
					<svg
						viewBox='0 0 166 13'
						className='z-0 w-full fill-[url(#fade-out-bottom-black)] text-center font-black uppercase'>
						<text x='0' y='12'>
							We Make IT Better
						</text>
					</svg>
				</div>

				<div className='flex flex-col items-center justify-center gap-y-1 border-t border-border/20 bg-foreground py-6 text-center'>
					<Link
						href='https://mateuszhada.com/'
						target='_blank'
						className='text-xs text-muted-foreground decoration-background hover:text-background hover:underline'>
						Made By <span className='font-semibold'>Mateusz Hada</span>
					</Link>
					<p>© 2024 KSM IT Solutions. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
