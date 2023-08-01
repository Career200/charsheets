import { useState } from 'react';

export default function AccountWindow() {
	const isLoggedIn = false;
	const user = { name: 'Boba Fett' };
	const [isShown, setIsShown] = useState(false);
	return (
		<div className="relative">
			<div className="py-[1px] border-terminal-400 border-2 bg-terminal-800 hover:bg-terminal-400 hover:text-terminal-800">
				<div className="relative p-2 cursor-pointer">
					<p className="w-min max-w-[5vw]" onClick={() => setIsShown(!isShown)}>
						{isLoggedIn ? user.name : 'Log in'}
					</p>
				</div>
				{isShown && (
					<div className="absolute top-[1px] -translate-x-full -translate-y-full p-2 border-2 border-terminal-400 bg-black text-terminal-400 font-space">
						Visible!
					</div>
				)}
			</div>
		</div>
	);
}
