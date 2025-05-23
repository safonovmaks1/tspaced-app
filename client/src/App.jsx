import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
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
	return <RouterProvider router={router}></RouterProvider>;
};
