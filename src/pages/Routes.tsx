import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from 'react-router-dom';
import Charsheet2020 from './cp2020';
import NotFound from './notFound';
import PlainData from './cp2020/PlainData';
import Layout from './layout/Layout';
import { tables } from './cp2020/plain/tables';
import BookLayout from './layout/BookLayout';

export default function Routes() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route element={<Layout />}>
					<Route index element={<Navigate to="/CP2020" />} />
					<Route path="/CP2020" element={<Charsheet2020 />} />
					<Route path="/CP2020plain" element={<PlainData />} />
					<Route path="/CP2020book" element={<BookLayout />}>
						{tables.map((Component) => {
							return (
								<Route
									key={Component.name}
									path={Component.name}
									element={Component()}
								/>
							);
						})}
					</Route>
				</Route>

				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}
