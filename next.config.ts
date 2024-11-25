import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		// Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
		SC_DISABLE_SPEEDY: 'false'
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack']
		})

		return config
	},
	experimental: {
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js'
				}
			}
		}
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io'
			}
		]
	}
}

export default nextConfig
