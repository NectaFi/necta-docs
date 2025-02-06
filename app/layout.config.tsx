import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
const docsBaseUrl = process.env.NODE_ENV === 'development' ? '/docs' : 'https://docs.nectafi.xyz'

export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<>
				<Image
					src="/logo.svg"
					alt="Necta Finance"
					width={90}
					height={30}
					className="block dark:hidden"
					priority
				/>
				<Image
					src="/logo-dark.svg"
					alt="Necta Finance"
					width={90}
					height={30}
					className="hidden dark:block"
					priority
				/>
			</>
		),
	},
	links: [
		{
			text: 'Docs',
			url: docsBaseUrl,
			active: 'nested-url',
		},
		{
			text: 'Github',
			url: 'https://github.com/NectaFi',
			active: 'nested-url',
		},
		{
			text: 'X',
			url: 'https://x.com/NectaFi',
			active: 'nested-url',
		},
	],
}
