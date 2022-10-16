import { Button } from '@mui/material';
import MainNavigation from '../components/MainNavigation.component';
import MainFooter from '../components/MainFooter.component';
import Counter from '../components/Counter';
import LandingPageContainer from '../container/LandingPageContainer'
const Home = () => {
	return (
		<>
			<MainNavigation />
			<LandingPageContainer />
			<MainFooter />
		</>
	);
};

export default Home;
