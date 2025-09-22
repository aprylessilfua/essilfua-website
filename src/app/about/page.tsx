import Image from "next/image";
import Section from "@/components/Section";

export const metadata = { title: "About Essilfua" };

export default function AboutPage() {
	return (
		<div>
			<Section title="About Essilfua" subtitle="Modest fashion for the modern woman">
				<div className="grid md:grid-cols-2 gap-8 items-start">
					<div className="aspect-[4/5] relative rounded overflow-hidden bg-black/5">
						<Image src="/founder.jpg" alt="Apryl Essilfua Poku" fill className="object-cover" />
					</div>
					<div className="space-y-6">
						<div>
							<h3 className="font-semibold mb-2">Our Story</h3>
							<p>Essilfua was born out of a desire to redefine modest fashion for the modern woman. With a deep respect for craftsmanship and culture, we create timeless pieces that balance simplicity, sophistication, and soul.</p>
						</div>
						<div>
							<h3 className="font-semibold mb-2">Our Mission</h3>
							<p>To inspire confidence and grace through clothing that reflects dignity, creativity, and purpose. Whether couture or ready-to-wear, each piece is designed to serve you, not just style you.</p>
						</div>
						<div>
							<h3 className="font-semibold mb-2">Meet the Founder – Apryl Essilfua Poku</h3>
							<p>Apryl Essilfua Poku is a visionary Ghanaian-American woman with an eye for fashion and a heart full of grace. From a young age, Apryl cherished fashion not just as clothing—but as a form of self-expression. Her journey from handmade scrunchies to a full brand reflects intention, excellence, and faith.</p>
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}


