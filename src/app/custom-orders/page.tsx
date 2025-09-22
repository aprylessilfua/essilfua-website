import Section from "@/components/Section";

export const metadata = { title: "Custom Orders" };

export default function CustomOrdersPage() {
	return (
		<Section title="Custom Orders" subtitle="Made-to-measure pieces crafted just for you">
			<div className="grid md:grid-cols-2 gap-8">
				<div className="space-y-6">
					<h3 className="font-semibold">Request Custom Designs</h3>
					<form className="space-y-3">
						<input required placeholder="Your name" className="w-full border border-black/20 rounded px-3 py-2" />
						<input type="email" required placeholder="Email" className="w-full border border-black/20 rounded px-3 py-2" />
						<input placeholder="WhatsApp number" className="w-full border border-black/20 rounded px-3 py-2" />
						<textarea required placeholder="Describe your dream outfit" className="w-full border border-black/20 rounded px-3 py-2 h-28" />
						<input type="file" multiple className="w-full" />
						<button className="bg-magenta text-white px-4 py-2 rounded">Submit Request</button>
					</form>
					<div>
						<h4 className="font-semibold mb-1">Measurement Guide Upload</h4>
						<p className="text-black/70">Upload your measurements following our clear guide.</p>
						<input type="file" className="mt-2" />
					</div>
					<div>
						<h4 className="font-semibold mb-1">In-Person Measurement & Styling (Accra)</h4>
						<p className="text-black/70">Book a session for measurements and styling advice. Limited to Accra & nearby.</p>
						<button className="mt-2 border border-black/20 px-3 py-2 rounded">Request Booking</button>
					</div>
				</div>
				<div className="space-y-4">
					<h3 className="font-semibold">Custom Order FAQs</h3>
					<ul className="space-y-3 text-sm text-black/80 list-disc pl-5">
						<li>Timelines: 7 days to 2 weeks. Express available at extra charge.</li>
						<li>International: Consultations via WhatsApp/email; we ship worldwide.</li>
						<li>Design Changes: Minor tweaks welcome; full redesigns on consultation.</li>
						<li>Alterations: One free alteration within 7 days if fault is on our end.</li>
						<li>Pricing: Starts from GHS 500. Quotes after consultation.</li>
					</ul>
				</div>
			</div>
		</Section>
	);
}


