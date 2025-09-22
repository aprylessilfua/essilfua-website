import Section from "@/components/Section";

export const metadata = { title: "Contact" };

export default function ContactPage() {
	return (
		<Section title="Contact Essilfua" subtitle="We'd love to hear from you">
			<div className="grid md:grid-cols-2 gap-8">
				<form className="space-y-3">
					<input required placeholder="Your name" className="w-full border border-black/20 rounded px-3 py-2" />
					<input type="email" required placeholder="Email" className="w-full border border-black/20 rounded px-3 py-2" />
					<textarea required placeholder="Message" className="w-full border border-black/20 rounded px-3 py-2 h-28" />
					<button className="bg-black text-white px-4 py-2 rounded">Send</button>
				</form>
				<div className="space-y-2 text-sm">
					<p>Email: essilfuathebrand@gmail.com</p>
					<p>Instagram & TikTok: @essilfua.thebrand</p>
					<p>WhatsApp: Available via channel</p>
				</div>
			</div>
		</Section>
	);
}


