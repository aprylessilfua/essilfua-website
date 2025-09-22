export default function Footer() {
	return (
		<footer className="mt-20 border-t border-black/10">
			<div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
				<div>
					<h4 className="font-semibold mb-2">Essilfua</h4>
					<p className="text-black/70">Modest fashion with a modern twist. Crafted with dignity, creativity, and purpose.</p>
				</div>
				<div>
					<h4 className="font-semibold mb-2">Contact</h4>
					<ul className="space-y-1">
						<li>email: essilfuathebrand@gmail.com</li>
						<li>Instagram & TikTok: @essilfua.thebrand</li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-2">Newsletter</h4>
					<form className="flex gap-2">
						<input type="email" required placeholder="Enter your email" className="flex-1 border border-black/20 rounded px-3 py-2" />
						<button className="bg-magenta text-white px-4 py-2 rounded">Join</button>
					</form>
					<p className="text-black/60 mt-2 text-xs">Sign up for exclusive updates, early access, and 10% off your first order.</p>
				</div>
			</div>
			<p className="text-center text-xs text-black/60 pb-8">© {new Date().getFullYear()} Essilfua. All rights reserved.</p>
		</footer>
	);
}


