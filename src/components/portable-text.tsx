/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'
import Link from 'next/link'

export default function CustomPortableText({ className, value }: { className?: string; value: PortableTextBlock[] }) {
	const components: PortableTextComponents = {
		list: {
			bullet: ({ children }) => (
				<ul className='prose prose-invert my-2.5 list-inside list-disc text-foreground'>{children}</ul>
			),
			number: ({ children }) => (
				<ol className='prose prose-invert my-2.5 list-inside list-decimal text-foreground'>{children}</ol>
			)
		},
		block: {
			h5: ({ children }) => <h5 className='mb-2 text-sm font-semibold'>{children}</h5>,
			h6: ({ children }) => <h6 className='mb-1 text-xs font-semibold'>{children}</h6>,
			blockquote: ({ children }) => <blockquote className='border-l-primary text-foreground'>{children}</blockquote>
		},
		marks: {
			link: ({ value, children }) => {
				const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
				return (
					<Link
						href={value?.href}
						target={target}
						rel={target === '_blank' ? 'noopener' : undefined}
						className='font-semibold text-foreground hover:underline'>
						{children}
					</Link>
				)
			}
		}
	}

	return (
		<div className={['prose', className].filter(Boolean).join(' ')}>
			<PortableText components={components} value={value} />
		</div>
	)
}
