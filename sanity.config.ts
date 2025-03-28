'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { i18nConfig, languages, locales } from '@/i18nConfig'
import { schemaTypes } from '@/sanity/schemas'
import home from '@/sanity/schemas/singletons/home'
import { documentInternationalization } from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { PluginOptions, defineConfig, defineField } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { defineDocuments, defineLocations, presentationTool, type DocumentLocation } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId, studioUrl } from './src/sanity/lib/api'
import { resolveHref } from './src/sanity/lib/utils'
import { assistWithPresets } from './src/sanity/plugins/assist'
import { pageStructure, singletonPlugin } from './src/sanity/plugins/settings'
import settings from './src/sanity/schemas/singletons/settings'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'

const homeLocation = {
	title: 'Home',
	href: '/'
} satisfies DocumentLocation
const blogLocation = {
	title: 'Blog',
	href: '/blog'
} satisfies DocumentLocation

export default defineConfig({
	basePath: studioUrl,
	projectId,
	dataset,
	schema: {
		types: schemaTypes
	},
	plugins: [
		documentInternationalization({
			// Required configuration
			supportedLanguages: languages,
			schemaTypes: ['home', 'settings', 'privacyPolicy']
		}),
		internationalizedArray({
			languages: languages,
			fieldTypes: ['string', 'text', 'number', 'faqAnswer', 'pageMetadata']
		}),
		presentationTool({
			resolve: {
				mainDocuments: defineDocuments([
					{
						route: '/blog/:slug',
						filter: `_type == "post" && slug.current == $slug`
					}
				]),
				locations: {
					home: defineLocations({
						locations: [homeLocation]
					}),
					settings: defineLocations({
						locations: [homeLocation],
						message: 'This document is used on all pages',
						tone: 'caution'
					}),
					post: defineLocations({
						select: {
							title: 'title',
							slug: 'slug.current'
						},
						resolve: doc => ({
							locations: [
								{
									title: doc?.title || 'Untitled',
									href: resolveHref('post', doc?.slug)!
								},
								homeLocation,
								blogLocation
							]
						})
					})
				}
			},
			previewUrl: { previewMode: { enable: '/api/draft-mode/enable' } }
		}),
		structureTool({ structure: pageStructure([]) }),
		// Configures the global "new document" button, and document actions, to suit the Settings document singleton
		singletonPlugin([settings.name, home.name]),
		// Add an image asset source for Unsplash
		unsplashImageAsset(),
		// Sets up AI Assist with preset prompts
		// https://www.sanity.io/docs/ai-assist
		assistWithPresets(),
		// Vision lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		process.env.NODE_ENV === 'development' && visionTool({ defaultApiVersion: apiVersion })
	].filter(Boolean) as PluginOptions[]
})
