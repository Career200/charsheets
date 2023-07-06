import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => navigate('/'), 3000);
	}, [navigate]);

	return (
		<main className="h-[100vh] p-12">
			<p>Sorry, the page doesn't exist</p>
			<p>Redirecting in 3... 2... 1...</p>
		</main>
	);
}
