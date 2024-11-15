import '../globals.css'

import { Sen } from 'next/font/google'

const sen = Sen({
	subsets: ['latin-ext'],
	variable: '--font-sen',
	display: 'swap'
})

export { metadata, viewport } from 'next-sanity/studio'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={sen.variable}>
			<body className='min-h-screen'>{children}</body>
		</html>
	)
}
