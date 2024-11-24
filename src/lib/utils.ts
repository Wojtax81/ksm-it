import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export type Path<T, P extends string = string> = P extends `${infer Key}.${infer Rest}`
	? Key extends keyof T
		? Rest extends string
			? Path<T[Key], Rest> // Recurse into nested objects
			: T[Key] // If there's no more path, return the type of the value
		: never
	: P extends keyof T
	? T[P]
	: never

export function deepMergeEmpty<T>(primary: T, fallback: T): T {
	if (Array.isArray(primary) && Array.isArray(fallback)) {
		return primary.map((item, index) => deepMergeEmpty(item, fallback[index] ?? item)) as T
	}

	if (primary && typeof primary === 'object' && fallback && typeof fallback === 'object') {
		const result: any = {}

		for (const key in primary) {
			if (primary[key] === null || primary[key] === undefined || primary[key] === '') {
				result[key] = fallback[key] ?? primary[key] // Use fallback if primary is empty
			} else if (typeof primary[key] === 'object') {
				// Recursively merge if the value is an object
				result[key] = deepMergeEmpty(primary[key], fallback[key] ?? primary[key])
			} else {
				result[key] = primary[key] // Keep primary value if not empty
			}
		}

		// Also handle fields in fallback that might not exist in primary
		for (const key in fallback) {
			if (primary[key] === undefined) {
				result[key] = fallback[key]
			}
		}

		return result
	}

	return primary // For non-object types, return the primary value
}

export function getNestedValue<T, P extends string>(obj: T, path: P): Path<T, P> {
	const keys = path.split('.') as (keyof T)[]
	return keys.reduce((acc: any, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}
