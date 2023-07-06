import { Outlet } from 'react-router-dom';

import './BookLayout.css';

export default function BookLayout() {
	return (
		<div className="book2020 p-4 bg-black text-white">
			<div className="flex flex-col justify-center items-center">
				<Outlet />
			</div>
			<div className="pt-4 text-white text-center">
				data from{' '}
				<a
					className="font-bold text-blue-400 hover:text-blue-300 active:text-blue-700"
					href="http://voltor.narod.ru/"
					target="_blank"
				>
					Voltor
				</a>
			</div>
		</div>
	);
}
