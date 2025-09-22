import Section from "@/components/Section";

export const metadata = { title: "Lookbook" };

export default function LookbookPage() {
	return (
		<Section title="Lookbook / Gallery" subtitle="Styled shoots and client highlights">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className="aspect-[3/4] bg-black/5 rounded" />
				))}
			</div>
		</Section>
	);
}


