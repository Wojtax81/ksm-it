import * as React from 'react'

import { cn } from '@/lib/utils'
import { FormLabel } from './form'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string
	isForm?: boolean
}

const labelStyles =
	'absolute left-4 pointer-events-none top-0 translate-y-2 scale-75 z-10 transform text-sm text-muted-foreground duration-300 peer-focus:translate-y-2 peer-focus:top-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:top-0 peer-focus:scale-75 peer-focus:text-primary origin-top-left font-normal'

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, label, isForm = false, placeholder, ...props }, ref) => {
		return (
			<div className='relative z-0'>
				<textarea
					className={cn(
						'peer flex min-h-[80px] w-full rounded-2xl border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						label ? 'pb-2 pt-6' : 'py-4',
						className
					)}
					ref={ref}
					placeholder={label ? ' ' : placeholder}
					{...props}
				/>

				{label && !isForm && (
					<label id={props.id} className={labelStyles}>
						{label}
					</label>
				)}
				{label && isForm && <FormLabel className={labelStyles}>{label}</FormLabel>}
			</div>
		)
	}
)
Textarea.displayName = 'Textarea'

export { Textarea }
