import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import OurBrands from './components/ourbrands/OurBrands';
// import OurLeaders from './components/ourleaders/OurLeaders';
import { HeroSection } from './components/herosection/HeroSection';
import Career from './components/career/Career';
import ClientPage from './components/ClientPage/ClientPage';
import Portfolio from './components/Portfolio/Portfolio';

import ContactUs from './components/contactUs/ContactUs';
import About from './components/about/About';
import Service from './components/servicess/Service';
import HomeServices from './components/servicess/homeservices/HomeServices';

// import Login from './components/admin/login/Login';
// import SignUp from './components/admin/signup/SignUp';
// import Users from './components/admin/users/Users';

import 'animate.css';
import Footer from './components/footer/Footer';

import GoTop from './components/GoTop';
// import AdminActionBtn from './components/admin/adminActionBtn/AdminActionBtn';
import Team from './components/team/Team';

// import HomePage from './components/admin/pages/homepage/HomePage';
// import TaskPage from './components/admin/pages/taskpage/TaskPage';

// import context to use global states
import Consutling from './components/consulting/Consutling';
import HrProcessComponent from './components/hr/HrProcessComponent';
import ClientReviews from './components/clientreviews/ClientReviews';
import VideoComponent from './components/videosection/VideoComponent';
import EnquiryModal from './components/EnquiryModal';
// import TeamsPage from './components/admin/pages/teamspage/TeamsPage';

import RealEstate from './components/Portfolio/PortFolioPages/RealEstate';
import Health from './components/Portfolio/PortFolioPages/Health';
import Hospitality from './components/Portfolio/PortFolioPages/Hospitality';
import FoodBeverage from './components/Portfolio/PortFolioPages/FoodBeverage';
import Lifestyle from './components/Portfolio/PortFolioPages/Lifestyle';
import Education from './components/Portfolio/PortFolioPages/Education';
import Technology from './components/Portfolio/PortFolioPages/Technology';

// admin pages
import JobApplications from './components/admin/jobapplications/JobApplications';
import PortForHome from './components/PortForHome/PortForHome';
import Durable from './components/Portfolio/PortFolioPages/Durable';
import Automobile from './components/Portfolio/PortFolioPages/Automobile';

function App() {
	return (
		<Router>
			<div style={{ overflowX: 'hidden' }} className='App'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<HeroSection />
								<Consutling />
								<OurBrands />
								<HomeServices />
								<PortForHome />
								<VideoComponent />
								<HrProcessComponent />
								{/* <OurLeaders /> */}
								<ClientReviews />
							</>
						}
					/>
					<Route path='/clients' element={<ClientPage />} />
					<Route path='/team' element={<Team />} />
					<Route path='/service' element={<Service />} />
					<Route path='/about' element={<About />} />
					<Route path='/careers' element={<Career />} />
					<Route path='/contactus' element={<ContactUs />} />
					<Route path='/portfolio' element={<Portfolio />} />

					{/* admin pages */}
					<Route path='/admin/jobApplications' element={<JobApplications />} />
					{/* <Route path="/admin/teams" element={<TeamsPage />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<SignUp />} />
          <Route path="/admin/tasks" element={<TaskPage />} /> */}

					{/* portfolio pages */}
					<Route path='/health' element={<Health />} />
					<Route path='/hospitality' element={<Hospitality />} />
					<Route path='/foodBeve' element={<FoodBeverage />} />
					<Route path='/lifestyle' element={<Lifestyle />} />
					<Route path='/realEstate' element={<RealEstate />} />
					<Route path='/education' element={<Education />} />
					<Route path='/technology' element={<Technology />} />
					<Route path='/automobile' element={<Automobile />} />
					<Route path='/durable' element={<Durable />} />
				</Routes>
			</div>
			<EnquiryModal />
			<GoTop />
			<Footer />
		</Router>
	);
}

export default App;
