import { Link, Outlet } from "react-router-dom";
import AccountWindow from "./Account";

export default function Layout() {
	return (
		<div className="flex flex-col flex-nowrap h-[100vh]">
			<main className="relative flex-1 bg-black text-white">
				<Outlet />
			</main>
			<div className="flex-none bg-black w-full h-24"> hidden </div>
			<nav
				className="w-full h-24 p-1 sm:p-4 fixed bottom-0 border-t-[1px] border-terminal-400
			shadow-inner shadow-terminal-600 bg-black text-terminal-400 font-press text-sm"
			>
				<div className="flex justify-between">
					<div>
						<p className="text-xs">
							Cyberpunk 2020<span className="animate-pulse">_</span>
						</p>
					</div>
				</div>
				<div className="mt-2 flex justify-between items-center">
					<ul className="text-xs sm:text-base flex justify-between items-center sm:gap-8">
						<li className="p-2 hover:outline outline-1 outline-terminal-400">
							<Link to="/CP2020">Charsheet</Link>
						</li>
						<li className="p-2 hover:outline outline-1 outline-terminal-400">
							<Link to="/CP2020help">Help</Link>
						</li>
						<li className="p-2 hover:outline outline-1 outline-terminal-400">
							<Link to="/CP2020plain">Stats/ Skills</Link>
						</li>
					</ul>
					<div className="relative bottom-4 sm:bottom-6">
						<AccountWindow buttonClassName="min-w-[100px] p-[1px] border-terminal-400 border-2 bg-terminal-800 hover:bg-terminal-400 hover:text-terminal-800 text-xs sm:text-sm font-major whitespace-nowrap" />
					</div>
				</div>
			</nav>
		</div>
	);
}
