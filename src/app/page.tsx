import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-black/60">• ɛh - sil - fu - waa •</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-2">every fashion girl's dream</h1>
            <p className="text-black/70 mt-4 max-w-prose">Modest fashion with a modern twist. Ready-to-wear pieces and bespoke couture crafted for dignity, creativity, and purpose.</p>
            <div className="mt-8 flex gap-3">
              <Link href="/shop" className="bg-black text-white px-5 py-3 rounded">Shop RTW</Link>
              <Link href="/custom-orders" className="border border-black/20 px-5 py-3 rounded">Request Custom Order</Link>
            </div>
          </div>
          <div className="aspect-[4/5] bg-black/5 rounded" />
        </div>
      </section>

      <Section title="Categories" subtitle="Dresses · Two-Piece Sets · Occasionwear · Custom Couture">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Dresses",
            "Two-Piece Sets",
            "Occasionwear",
            "Custom Couture",
          ].map((c) => (
            <div key={c} className="rounded-lg border border-black/10 p-6 text-center">{c}</div>
          ))}
        </div>
      </Section>

      <Section title="Essilfua Circle">
        <Newsletter />
      </Section>
    </div>
  );
}
