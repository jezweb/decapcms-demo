interface ContactProps {
	data?: {
		title?: string
		email?: string
		phone?: string
		address?: string
	}
}

export default function Contact({ data }: ContactProps) {
	const title = data?.title || 'Get In Touch'
	const email = data?.email || 'hello@example.com'
	const phone = data?.phone || '+1 (555) 123-4567'
	const address = data?.address || '123 Main St, City, Country'

	return (
		<section id="contact" className="py-20 px-4 bg-gray-50">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
					{title}
				</h2>
				<div className="grid md:grid-cols-3 gap-8 text-center">
					<div>
						<h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
						<a href={`mailto:${email}`} className="text-blue-600 hover:underline">
							{email}
						</a>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2 text-gray-900">Phone</h3>
						<a href={`tel:${phone.replace(/\s/g, '')}`} className="text-blue-600 hover:underline">
							{phone}
						</a>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2 text-gray-900">Address</h3>
						<p className="text-gray-700">{address}</p>
					</div>
				</div>
			</div>
			<footer className="text-center mt-16 text-gray-600">
				<p>&copy; {new Date().getFullYear()} Decap CMS Demo. Built with React & Cloudflare.</p>
			</footer>
		</section>
	)
}
