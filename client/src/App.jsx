import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { ERROR } from './constants';
import {
	ContactPage,
	ErrorPage,
	HomePage,
	LoginPage,
	PortfolioPage,
	PostPage,
	PrivacyPage,
	RegisterPage,
	UsersPage,
} from './pages';
import { Root } from './routes/root';
import { setUser } from './store/actions';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />

			<Route path="/users" element={<UsersPage />} />
			<Route path="/portfolio" element={<PortfolioPage />} />

			<Route path="/post" element={<PostPage />} />
			<Route path="/post/:id" element={<PostPage />} />
			<Route path="/post/:id/edit" element={<PostPage />} />

			<Route path="/contact" element={<ContactPage />} />
			<Route path="/privacy" element={<PrivacyPage />} />

			<Route path="*" element={<ErrorPage error={ERROR.PAGE_NOT_EXIST} />} />
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
