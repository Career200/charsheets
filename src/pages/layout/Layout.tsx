import { Link, Outlet } from 'react-router-dom';
import Collapsible from '../../components/Collapsible/Collapsible';
import { tables } from '../cp2020/plain/tables';
import { memo } from 'react';

const MemoizedLink = memo(({ Component }: { Component: () => JSX.Element }) => (
	<Link
		className="mb-2 border-2 pt-2 border-white text-center hover:scale-105 hover:bg-orange-950"
		key={Component.name}
		to={`/CP2020book/${Component.name}`}
	>
		{Component.name.slice(3).replace(/([a-z])([A-Z])/g, '$1 $2')}
	</Link>
));

export default function Layout() {
	return (
		<>
			<header className="sticky top-0 w-full min-h-16 px-8 pt-2 bg-black text-orange-500">
				<nav>
					<ul className="relative flex justify-between items-center gap-8 list-disc">
						<li>
							<Link className="text-blue-200" to="/CP2020">
								Cyberpunk 2020 character sheet
							</Link>
						</li>
						<li>
							<Link className="text-blue-200" to="/CP2020plain">
								See Stats and Skills descriptions as plain text
							</Link>
						</li>
						<li className="shrink-0">
							<Collapsible title="More data">
								<div
									className="fixed top-14 left-0 w-full h-full overflow-auto
									border-orange-400 bg-black grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-2"
								>
									{tables.map((Component) => (
										<MemoizedLink key={Component.name} Component={Component} />
									))}
								</div>
							</Collapsible>
						</li>
					</ul>
				</nav>
			</header>
			<main className="relative h-[calc(100vh-3.5rem)] bg-black">
				<Outlet />
			</main>
		</>
	);
}
