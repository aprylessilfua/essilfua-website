import Section from "@/components/Section";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
	return (
		<Section title="Testimonials" subtitle="What our clients say">
			<div className="space-y-4">
				<blockquote className="border-l-4 border-magenta pl-4 text-black/80">&quot;I felt so confident in my custom dress. Essilfua just gets what modesty should look like in 2025.&quot; — Anita, Accra</blockquote>
				<blockquote className="border-l-4 border-magenta pl-4 text-black/80">&quot;The quality was top-tier, and the team was so helpful with sizing!&quot; — Lisa, Kumasi</blockquote>
			</div>
		</Section>
	);
}


