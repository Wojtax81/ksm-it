'use client'

import { Locales } from '@/i18nConfig'
import { ListOrderedIcon, LucideIcon, MailIcon, NewspaperIcon, PackageOpenIcon, RocketIcon } from 'lucide-react'
import { useIntl } from 'react-intl'

export const rawLinks: { fallback: string; href: string; accessor: string; Icon: LucideIcon; isCTA?: boolean }[] = [
	{
		fallback: 'Services',
		href: '/#services',
		accessor: 'links.services',
		Icon: PackageOpenIcon
	},
	{
		fallback: 'How It Works',
		href: '/#how-it-works',
		accessor: 'links.howItWorks',
		Icon: ListOrderedIcon
	},
	{
		fallback: 'Blog',
		href: '/blog',
		accessor: 'links.blog',
		Icon: NewspaperIcon
	},
	{
		fallback: 'Contact',
		href: '/#contact',
		accessor: 'links.contact',
		Icon: MailIcon
	},
	{
		fallback: 'Boost Your System',
		href: '/#contact',
		accessor: 'links.navCTA',
		Icon: RocketIcon,
		isCTA: true
	}
]

export type NavLink = {
	label: string
	href: string
	Icon: LucideIcon
	isCTA?: boolean
}

export const getNavLinks = (locale: Locales): NavLink[] => {
	const { $t } = useIntl()

	return rawLinks.map(link => {
		return {
			...link,
			label: $t({ id: link.accessor, defaultMessage: link.fallback })
		}
	})
}
