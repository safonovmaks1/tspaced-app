import { Outlet } from 'react-router-dom';
import { Footer, Header, Main } from '../components';

export const Root = () => {
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	const fakeDataFetch = () => {
	// 		setTimeout(() => {
	// 			setIsLoading(false);
	// 		}, 4000);
	// 	};

	// 	fakeDataFetch();
	// }, []);

	// return isLoading ? (
	// 	<Loader />
	// ) : (
	// 	<div className="App">
	// 		<Header />
	// 		<Main>
	// 			<Outlet />
	// 		</Main>
	// 		<Footer />
	// 		<ScrollUp />
	// 		<CookieConsent />
	// 		<Modal />
	// 	</div>
	// );

	return (
		<div className="App">
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
			{/* Uncomment the following lines if you have these components */}
			{/* <ScrollUp /> */}
			{/* <CookieConsent /> */}
			{/* <Modal /> */}
		</div>
	);
};
