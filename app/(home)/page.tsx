import Link from 'next/link'

export default function HomePage() {
	return (
		<main className="flex flex-1 flex-col items-center px-6 py-24">
			<h1 className="mb-12 text-4xl font-bold">Necta Blog</h1>

			<div className="w-full max-w-2xl">
				<Link
					href="/blog/what-is-yield"
					className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-[#FE5E00] dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900/80"
				>
					<h2 className="text-2xl font-semibold group-hover:text-[#FE5E00]">
						What is Yield?
					</h2>
					<p className="mt-2 text-fd-muted-foreground">
						A comprehensive guide to understanding crypto yield, its sources, and
						optimization strategies.
					</p>
					<div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">Jan 2025</div>
				</Link>
			</div>
		</main>
	)
}
