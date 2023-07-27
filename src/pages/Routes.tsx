import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate
} from 'react-router-dom';
import Charsheet2020 from './cp2020';
import NotFound from './notFound';
import PlainData from './cp2020/PlainData';
import Layout, { Guide } from './layout/Layout';
import Help from './cp2020/help';

export default function Routes() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route element={<Layout />}>
					<Route index element={<Navigate to="/CP2020" />} />
					<Route path="/CP2020" element={<Charsheet2020 />} />
					<Route path="/CP2020help" element={<Help />} />
					<Route path="/CP2020plain" element={<PlainData />} />
					<Route path="guide" element={<Guide />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}
