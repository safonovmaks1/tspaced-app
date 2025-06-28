import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage error={ERROR.PAGE_NOT_EXIST} />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'register', element: <RegisterPage /> },
			{ path: 'users', element: <UsersPage /> },
			{ path: 'portfolio', element: <PortfolioPage /> },

			{
				path: 'post',
				children: [
					{ index: true, element: <PostPage /> },
					{ path: ':id', element: <PostPage /> },
					{ path: ':id/edit', element: <PostPage /> },
				],
			},

			{ path: 'contact', element: <ContactPage /> },
			{ path: 'privacy', element: <PrivacyPage /> },
		],
	},
]);

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

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
};
