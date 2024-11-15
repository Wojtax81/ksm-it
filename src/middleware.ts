import { i18nRouter } from 'next-i18n-router'
import { NextRequest } from 'next/server'
import { i18nConfig } from './i18nConfig'

export async function middleware(request: NextRequest) {
	return i18nRouter(request, i18nConfig)
}

export const config = {
	matcher: ['/((?!_next/static|api|_next/image|favicon.ico|studio|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
}
