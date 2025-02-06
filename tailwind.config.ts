import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./app/**/*.{ts,tsx}',
		'./content/**/*.mdx',
		'./node_modules/fumadocs-ui/dist/**/*.js',
	],
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography')],
}

export default config
