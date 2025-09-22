export default function Section({ title, children, subtitle }: { title?: string; subtitle?: string; children: React.ReactNode }) {
	return (
		<section className="mx-auto max-w-6xl px-4 py-12">
			{title ? (
				<div className="mb-6">
					<h2 className="text-2xl font-semibold">{title}</h2>
					{subtitle ? <p className="text-black/70 mt-1">{subtitle}</p> : null}
				</div>
			) : null}
			{children}
		</section>
	);
}


