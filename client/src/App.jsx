import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import {
	ContactPage,
	ErrorPage,
	HomePage,
	LoginPage,
	PortfolioPage,
	PostPage,
	PrivacyPage,
	RegisterPage,
} from './pages';
import { Root } from './routes/root';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />

			<Route path="/portfolio" element={<PortfolioPage />} />

			<Route path="/post" element={<PostPage />} />
			<Route path="/post/:id" element={<PostPage />} />
			<Route path="/post/:id/edit" element={<PostPage />} />

			<Route path="/contact" element={<ContactPage />} />
			<Route path="/privacy" element={<PrivacyPage />} />

			<Route path="*" element={<ErrorPage />} />
		</Route>,
	),
);

export const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};
