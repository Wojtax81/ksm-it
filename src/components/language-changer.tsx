'use client'

import { Locales, i18nConfig, locales } from '@/i18nConfig'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import { useCurrentLocale } from 'next-i18n-router/client'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

type Props = {
	className?: string
}

const LanguageChanger = ({ className }: Props) => {
	const router = useRouter()
	const currentPathname = usePathname()
	const currentLocale = useCurrentLocale(i18nConfig) as Locales | undefined
	const [isPending, setIsPending] = useState(false)

	const handleChange = (newLocale: Locales) => {
		// set cookie for next-i18n-router
		const days = 30
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		const expires = '; expires=' + date.toUTCString()
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

		if (currentLocale === i18nConfig.defaultLocale) {
			router.push('/' + newLocale + currentPathname)
		} else {
			router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
		}

		router.refresh()
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className={cn('flex items-center gap-1 text-sm text-foreground', className)}>
					<span className='uppercase'>{currentLocale}</span>
					<ChevronDownIcon className='h-4 w-4' />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-16 min-w-16'>
				{locales.map(locale => (
					<DropdownMenuItem
						key={locale}
						onClick={() => handleChange(locale)}
						className={cn(
							'uppercase',
							currentLocale === locale
								? 'pointer-events-none cursor-default text-foreground'
								: 'text-muted-foreground hover:underline'
						)}>
						{locale}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
export default LanguageChanger
