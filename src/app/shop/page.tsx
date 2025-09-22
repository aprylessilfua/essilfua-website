import Section from "@/components/Section";

export const metadata = { title: "Shop RTW" };

const products = [
	{ id: "amina", name: "Amina Set", desc: "Breezy two-piece in breathable crepe.", price: "GHS 650", tag: "Set" },
	{ id: "selina", name: "Selina Occasion Dress", desc: "Floor-length wrap with bishop sleeves.", price: "GHS 950", tag: "Occasion" },
];

export default function ShopPage() {
	return (
		<Section title="Shop Ready-to-Wear" subtitle="Everyday elegance and occasionwear">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((p) => (
					<div key={p.id} className="border border-black/10 rounded-lg overflow-hidden">
						<div className="aspect-square bg-black/5" />
						<div className="p-4">
							<div className="text-xs text-magenta mb-1">{p.tag}</div>
							<h3 className="font-semibold">{p.name}</h3>
							<p className="text-black/70 text-sm">{p.desc}</p>
							<div className="mt-3 font-medium">{p.price}</div>
							<button className="mt-4 w-full bg-black text-white py-2 rounded">View</button>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}


