import { useState } from 'react';

export default function AccountWindow() {
	const isLoggedIn = false;
	const user = { name: 'Boba Fett' };
	const [isShown, setIsShown] = useState(false);
	return (
		<div className="relative p-2 cursor-pointer">
			<p className="w-min max-w-[5vw]" onClick={() => setIsShown(!isShown)}>
				{isLoggedIn ? user.name : 'Log in'}
			</p>
			{isShown && (
				<div className="absolute -top-[100%] -translate-x-full p-2 border-2 border-terminal-400 bg-black">
					Visible!
				</div>
			)}
		</div>
	);
}
