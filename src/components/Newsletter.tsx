export default function Newsletter() {
	return (
		<div className="bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
			<div>
				<h3 className="text-xl font-semibold">Join the Essilfua Circle</h3>
				<p className="text-white/80 text-sm">Sign up for exclusive updates, early access to collections, and 10% off your first order.</p>
			</div>
			<form className="flex w-full md:w-auto gap-2">
				<input type="email" required placeholder="Enter your email" className="flex-1 md:w-80 rounded px-3 py-2 text-black" />
				<button className="bg-magenta text-white px-4 py-2 rounded">Subscribe</button>
			</form>
		</div>
	);
}


