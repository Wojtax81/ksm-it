import { Marquee } from '@/components/marquee'
import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'

type Props = {
	heading: string
	logos: any[]
	className?: string
}

export const TrustedBy = ({ className, heading, logos }: Props) => {
	return (
		<section className={cn('flex max-w-full flex-col items-center gap-y-6 overflow-clip', className)}>
			<p className='text text-sm text-primary-foreground/75'>{heading}</p>

			<Marquee className='[&_ul]:gap-6 md:[&_ul]:gap-12 lg:[&_ul]:gap-16' speed={1}>
				{logos?.map((logo, i) => (
					<li key={i} className='pointer-events-none h-8 w-auto select-none px-2 py-1 md:h-10'>
						<Image
							src={urlForImage(logo)?.fit('max').height(100).url() as string}
							alt={`Logo ${logo.company}`}
							width={300}
							height={100}
							className={cn('h-full w-auto object-contain saturate-0 duration-300 hover:saturate-100')}
						/>
						<span className='sr-only'>{logo.company}</span>
					</li>
				))}
			</Marquee>
		</section>
	)
}
