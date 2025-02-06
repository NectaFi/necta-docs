import Link from 'next/link'
import Image from 'next/image'

export default function YieldBlogPost() {
	return (
		<article className="prose prose-zinc mx-auto max-w-3xl px-6 py-24 dark:prose-invert">
			<Link
				href="/"
				className="mb-12 inline-flex items-center text-sm text-zinc-500 hover:text-[#FE5E00] dark:text-zinc-400"
			>
				← Back to Blog
			</Link>

			<div className="not-prose mb-12 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
				<Image
					src="/blog/yield.png"
					alt="Understanding Yield in DeFi"
					width={1200}
					height={630}
					className="w-full"
					priority
				/>
			</div>

			<h1>What is Yield?</h1>

			<p className="text-zinc-500 dark:text-zinc-400">Feb 2025</p>

			<p className="lead">
				This article explains crypto yield in simple terms, provides examples of its
				sources, and how to manage it effectively.
			</p>

			<h2>Overview</h2>
			<p>
				As you navigate DeFi, the term &apos;yield&apos; often pops up. In the most basic
				terms, yield refers to the earnings generated and realized on an investment over a
				particular period. These earnings can come from various activities such as:
			</p>

			<ul>
				<li>
					<strong>Lending:</strong> Platforms like Aave, Compound, and Morpho.
				</li>
				<li>
					<strong>Staking:</strong> Services such as Lido and EigenLayer.
				</li>
				<li>
					<strong>Yield Farming:</strong> Platforms like Yearn, Harvest, and Beefy.
				</li>
			</ul>

			<h2>Understanding Interest-Bearing Tokens</h2>
			<p>
				When you put your tokens to work on one of these platforms, you receive proof of
				deposit as an Interest-Bearing Token. For example, when you lend USDC to Aave, you
				receive aUSDC in return. This aUSDC represents your lent USDC and entitles you to
				the interest it accrues over time.
			</p>

			<h2>Detailed Examples of Yield-Generating Activities</h2>

			<h3>Lending</h3>
			<p>
				Lending protocols like Aave, Compound, and Morpho allow users to lend their crypto
				assets to earn yield. For example, when you lend USDC to Aave, you receive aUSDC in
				return. This aUSDC represents your lent USDC plus the interest it accrues over time.
			</p>

			<h3>Staking</h3>
			<p>
				Staking involves locking up tokens to support a platform&apos;s operation or
				liquidity in exchange for rewards. For instance, you can stake ETH via Lido Finance
				to earn rewards for securing Ethereum, receiving stETH as yield.
			</p>

			<h3>Yield Farming</h3>
			<p>
				Yield farming involves navigating the DeFi landscape to maximize yield by leveraging
				multiple protocols. For example, you can put ETH into a yield farming protocol like
				Yearn Finance, which rebalances it across various lending protocols to get the best
				APY.
			</p>

			<h2>Dealing with APY Volatility</h2>
			<p>
				APY (Annual Percentage Yield) represents the yearly rate of return you can expect
				from yield-generating activities. However, APY isn&apos;t fixed and can fluctuate
				due to factors like:
			</p>
			<ul>
				<li>Supply and demand dynamics</li>
				<li>Changes in liquidity</li>
				<li>Protocol governance decisions</li>
			</ul>

			<div className="my-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
				<h3 className="mt-0">How Necta Helps</h3>
				<p className="mb-0">
					Necta&apos;s intelligent agents continuously monitor and analyze APY across
					different protocols, automatically reallocating your funds to optimize returns
					while maintaining your risk preferences.
				</p>
			</div>

			<h2>Looking Ahead</h2>
			<p>
				Understanding yield in DeFi is crucial for making informed investment decisions.
				With Necta&apos;s automated approach, you can navigate the complexities of yield
				optimization while maintaining full control of your assets.
			</p>

			<div className="mt-16 flex justify-center">
				<Link
					href="https://docs.nectafi.xyz/introduction/what-is-necta"
					className="rounded-lg bg-[#FE5E00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#FE5E00]/90"
				>
					Learn More About Necta
				</Link>
			</div>
		</article>
	)
}
