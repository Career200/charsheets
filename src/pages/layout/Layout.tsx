import { Link, Outlet } from 'react-router-dom';
import AccountWindow from './Account';

export default function Layout() {
	return (
		<div className="flex flex-col flex-nowrap h-[100vh]">
			<main className="relative flex-1 bg-black text-white">
				<Outlet />
			</main>
			<div className="flex-none bg-black w-full h-24"> hidden </div>

			<nav className="fixed bottom-0 flex justify-between border-t-[1px] border-terminal-400 shadow-inner shadow-terminal-600 w-full h-24 p-4 bg-black text-terminal-400 font-press text-sm">
				<div>
					<p className="text-xs">
						Cyberpunk 2020<span className="animate-pulse">_</span>
					</p>
					<ul className="mt-2 flex justify-between items-center gap-8">
						<li className="p-2 hover:outline outline-1 outline-terminal-400">
							<Link to="/CP2020">Character sheet</Link>
						</li>
						<li className="p-2 hover:outline outline-1 outline-terminal-400">
							<Link to="/CP2020help">Help</Link>
						</li>
						<li className="p-2 hover:outline outline-1 outline-terminal-400">
							<Link to="/CP2020plain">Stats and Skills</Link>
						</li>
					</ul>
				</div>
				<AccountWindow />
			</nav>
		</div>
	);
}
