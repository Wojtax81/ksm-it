import { SchemaTypeDefinition } from 'sanity'
import settings from './singletons/settings'
import home from './singletons/home'
import post from './documents/post'
import author from './documents/author'
import sectionHeading from './objects/section-heading'
import titleDescription from './objects/title-description'

export const schemaTypes: SchemaTypeDefinition<any>[] = [
	// Singletons
	settings,
	home,
	// Documents
	post,
	author,
	// Objects
	sectionHeading,
	titleDescription
]
