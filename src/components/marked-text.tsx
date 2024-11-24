type Props = {
	text: string
	Wrapper: (text: string) => JSX.Element
	matcher?: RegExp
}

export const MarkedText = ({ text, Wrapper, matcher }: Props) => {
	const regex = matcher ?? /\{(.*?)\}/g
	const parts = text.split(regex)
	const matched = text.match(regex)?.map(m => m.slice(1, -1))

	return <>{parts.map((part, i) => (matched?.includes(part) ? Wrapper(part) : <span key={i}>{part}</span>))}</>
}
