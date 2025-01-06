import { siteConfig } from '@/config/site'
import { Locales } from '@/i18nConfig'
import getIntl from '@/intl'
import Link from 'next/link'
import Wordmark from '../../../../public/assets/brand/wordmark.svg'
import { FooterWrapper } from './wrapper'

type Props = {
	locale: Locales
}

const FOOTER_LINKS = [
	{
		fallback: 'Home',
		accessorKey: 'links.home',
		href: '/'
	},
	{
		fallback: 'Blog',
		accessorKey: 'links.blog',
		href: '/blog'
	},
	{
		fallback: 'Privacy Policy',
		accessorKey: 'links.privacyPolicy',
		href: '/privacy-policy'
	}
]

export const Footer = async ({ locale }: Props) => {
	const { $t } = await getIntl(locale)
	const year = new Date().getFullYear()

	return (
		<FooterWrapper>
			<footer className='bg-foreground pt-16 text-background'>
				<div className='grid-container'>
					<div className='mb-16 flex flex-col flex-wrap gap-x-12 gap-y-12 md:justify-between lg:mb-20 lg:flex-row'>
						<div>
							<div>
								<Wordmark className='h-20 w-auto lg:h-24' />
							</div>
							<p className='mb-6 mt-4 max-w-xs text-muted-foreground'>{$t({ id: 'footer.motto' })}</p>
							<Link href={`mailto:${siteConfig.email}`} className='text-lg hover:underline'>
								{siteConfig.email}
							</Link>
						</div>

						<div>
							<p className='mb-3 text-muted-foreground'>{$t({ id: 'seeMore', defaultMessage: 'See More' })}</p>
							<ul className='space-y-3'>
								{FOOTER_LINKS.map(link => (
									<li key={link.accessorKey}>
										<Link
											href={link.href}
											className='break-word break-all bg-gradient-secondary bg-clip-text text-3xl font-extrabold leading-none text-transparent decoration-primary hover:underline lg:text-4xl'>
											{$t({ id: link.accessorKey, defaultMessage: link.fallback })}
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
							{$t({ id: 'madeBy', defaultMessage: 'Made by' })} <span className='font-semibold'>Mateusz Hada</span>
						</Link>
						<p>
							© {year ?? '2024'} KSM IT Solutions.{' '}
							{$t({ id: 'footer.allRightsReserved', defaultMessage: 'All rights reserved.' })}
						</p>
					</div>
				</div>
			</footer>
		</FooterWrapper>
	)
}
