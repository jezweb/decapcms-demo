interface Service {
	title: string
	description: string
	icon?: string
}

interface ServicesProps {
	data?: {
		title?: string
		services?: Service[]
	}
}

export default function Services({ data }: ServicesProps) {
	const title = data?.title || 'Our Services'
	const services = data?.services || [
		{
			title: 'Web Development',
			description: 'Modern, responsive websites built with the latest technologies',
		},
		{
			title: 'Cloud Solutions',
			description: 'Scalable cloud infrastructure on Cloudflare and AWS',
		},
		{
			title: 'Consulting',
			description: 'Expert guidance for your digital transformation journey',
		},
	]

	return (
		<section id="services" className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
					{title}
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
						>
							<h3 className="text-2xl font-semibold mb-4 text-blue-600">
								{service.title}
							</h3>
							<p className="text-gray-700">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
