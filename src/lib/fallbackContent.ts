import { fallbackContent, FallbackContent } from '@/translations/fallback'
import { DeepRequired } from 'react-hook-form'
import { getNestedValue, deepMergeEmpty, Path } from './utils'

type NestedObjectPath<T> = T extends object
	? {
			[K in keyof T]: K extends string
				? T[K] extends object
					? `${K}` | `${K}.${NestedObjectPath<T[K]>}` // Recursively concatenate for deeper levels
					: `${K}` // Base case: no further nesting
				: never
	  }[keyof T]
	: never

export const fallbackTranslations = <
	T extends Record<string, any> | undefined,
	P extends NestedObjectPath<DeepRequired<FallbackContent>>
>(
	path: P,
	translations: T
): Path<DeepRequired<FallbackContent>, P> => {
	const fallbackSection = getNestedValue(fallbackContent, path)

	return deepMergeEmpty(translations ?? fallbackSection, fallbackSection) as Path<DeepRequired<FallbackContent>, P>
}
