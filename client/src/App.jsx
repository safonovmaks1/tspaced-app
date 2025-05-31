import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { setUser } from './actions';
import {
	ContactPage,
	ErrorPage,
	Home,
	LoginPage,
	PortfolioPage,
	PrivacyPage,
	RegisterPage,
	UsersPage,
} from './pages';
import { Root } from './routes';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />

			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/users" element={<UsersPage />} />

			<Route path="/portfolio" element={<PortfolioPage />} />

			{/* <Route path="/post" element={<Post />} /> */}
			{/* <Route path="/post/:id" element={<Post />} /> */}
			{/* <Route path="/post/:id/edit" element={<Post />} /> */}

			<Route path="/contact" element={<ContactPage />} />
			<Route path="/privacy" element={<PrivacyPage />} />

			<Route path="*" element={<ErrorPage />} />
		</Route>,
	),
);

export const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	return <RouterProvider router={router}></RouterProvider>;
};
