import { Marquee } from '@/components/marquee'
import { cn } from '@/lib/utils'

type Props = {
	label: string
	className?: string
}

export const TrustedBy = ({ className, label }: Props) => {
	return (
		<section className={cn('flex flex-col items-center gap-y-6', className)}>
			<p className='text text-sm text-primary-foreground/75'>{label}</p>

			<Marquee className='[&_ul]:gap-6 md:[&_ul]:gap-12 lg:[&_ul]:gap-16' speed={1}>
				{TRUSTED_BY.map(brand => (
					<li key={brand.slug} className='pointer-events-none max-w-full shrink-0 select-none px-2 py-1'>
						{/* <Image
							src={`/images/partners/${brand.slug}.webp`}
							alt={`Logo ${brand.title}`}
							width={300}
							height={100}
							className={cn('h-auto max-h-full w-auto object-contain', partner.invert && 'invert dark:invert-0')}
						/> */}
						<span className='text-3xl font-black uppercase text-primary-foreground opacity-50'>{brand.title}</span>
					</li>
				))}
			</Marquee>
		</section>
	)
}

const TRUSTED_BY = [
	{
		title: 'Brand 1',
		slug: 'brand-1'
	},
	{
		title: 'Brand 2',
		slug: 'brand-2'
	},
	{
		title: 'Brand 3',
		slug: 'brand-3'
	},
	{
		title: 'Brand 4',
		slug: 'brand-4'
	},
	{
		title: 'Brand 5',
		slug: 'brand-5'
	},
	{
		title: 'Brand 6',
		slug: 'brand-6'
	},
	{
		title: 'Brand 7',
		slug: 'brand-7'
	},
	{
		title: 'Brand 8',
		slug: 'brand-8'
	},
	{
		title: 'Brand 9',
		slug: 'brand-9'
	},
	{
		title: 'Brand 10',
		slug: 'brand-10'
	},
	{
		title: 'Brand 11',
		slug: 'brand-11'
	},
	{
		title: 'Brand 12',
		slug: 'brand-12'
	}
]
