import { SchemaTypeDefinition } from 'sanity'
import settings from './singletons/settings'
import home from './singletons/home'
import post from './documents/post'
import author from './documents/author'
import sectionHeading from './objects/section-heading'
import titleDescription from './objects/title-description'
import message from './documents/message'
import faq from './documents/faq'
import faqAnswer from './objects/faq-answer'

export const schemaTypes: SchemaTypeDefinition<any>[] = [
	// Singletons
	settings,
	home,
	// Documents
	post,
	author,
	message,
	faq,
	// Objects
	sectionHeading,
	titleDescription,
	faqAnswer
]
