interface HeroProps {
	data?: {
		title?: string
		subtitle?: string
		ctaText?: string
		ctaLink?: string
	}
}

export default function Hero({ data }: HeroProps) {
	const title = data?.title || 'Welcome to Our Site'
	const subtitle = data?.subtitle || 'Building amazing experiences with modern technology'
	const ctaText = data?.ctaText || 'Get Started'
	const ctaLink = data?.ctaLink || '#contact'

	return (
		<section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<h1 className="text-5xl md:text-6xl font-bold mb-6">
					{title}
				</h1>
				<p className="text-xl md:text-2xl mb-8 text-blue-100">
					{subtitle}
				</p>
				<a
					href={ctaLink}
					className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
				>
					{ctaText}
				</a>
			</div>
		</section>
	)
}
