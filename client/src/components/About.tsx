interface AboutProps {
	data?: {
		title?: string
		content?: string
	}
}

export default function About({ data }: AboutProps) {
	const title = data?.title || 'About Us'
	const content = data?.content || 'We create innovative solutions for modern businesses.'

	return (
		<section id="about" className="py-20 px-4 bg-gray-50">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
					{title}
				</h2>
				<div className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
					{content}
				</div>
			</div>
		</section>
	)
}
