"use client";
import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
			<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<div className="relative h-8 w-8 rounded-full bg-magenta" />
					<span className="font-semibold tracking-wide">ESSILFUA</span>
				</Link>
				<nav className="flex items-center gap-6 text-sm">
					<Link href="/shop" className="hover:text-magenta">Shop RTW</Link>
					<Link href="/custom-orders" className="hover:text-magenta">Custom Orders</Link>
					<Link href="/lookbook" className="hover:text-magenta">Lookbook</Link>
					<Link href="/about" className="hover:text-magenta">About</Link>
					<Link href="/contact" className="hover:text-magenta">Contact</Link>
				</nav>
			</div>
		</header>
	);
}


