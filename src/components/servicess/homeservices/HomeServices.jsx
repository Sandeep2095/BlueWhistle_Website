import React from 'react';
import './HomeServices.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom';

import Service from '../../servicess/Service';

const HomeServices = () => {
	const gotoBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<div data-aos='fade-up' className='home-service-cont'>
			<div className='heading-round-bg'>
				<h1
					style={{
						textAlign: 'center',
						marginBottom: '1rem',
						padding: '1rem',
						color: 'white',
					}}
					className='custom-section-heading'
				>
					Services We Provide
				</h1>
			</div>

			<div className='home-services-grid-cont'>
				{/* 1 */}
				<div className='home-service-item-cont'>
					<div className='home-service-content'>
						<p>Digital Media Services</p>
						<p>
							We think it's important to use the appropriate shades of science and art
							to colour the fast-expanding digital marketing scene.{' '}
						</p>
					</div>
					<div className='home-service-layer'></div>
				</div>

				{/* 2 */}
				<div className='home-service-item-cont'>
					<div className='home-service-content'>
						<p>Social Media Marketing</p>
						<p>
							The strongest and perhaps most successful links between your brand and
							your customer base are social media platforms
						</p>
					</div>
					<div className='home-service-layer'></div>
				</div>
				{/* 3 */}
				<div className='home-service-item-cont'>
					<div className='home-service-content'>
						<p>Web design & Development</p>
						<p>
							We create and construct websites that are not simply functional—they are
							fantastic!
						</p>
					</div>
					<div className='home-service-layer'></div>
				</div>
				{/* 4 */}
				<div className='home-service-item-cont'>
					<div className='home-service-content'>
						<p>Video Production</p>
						<p>
							Our in-house production hub, the Video Production and Photography team,
							also known as Blue Production, is made up of photographers,
							videographers, producers, directors, editors, and animators who work
							together to produce excellent video content.
						</p>
					</div>
					<div className='home-service-layer'></div>
				</div>
				{/* 5 */}
				<div className='home-service-item-cont'>
					<div className='home-service-content'>
						<p>Influencer outreach, Celebrity Management & PR</p>
						<p>
							Experts in influencer relationship management and public relations
							network with some of the biggest online advocates.
						</p>
					</div>
					<div className='home-service-layer'></div>
				</div>
				{/* 6 */}
				<div className='home-service-item-cont'>
					<div className='home-service-content'>
						<p>Media Buying and Planning</p>
						<p>
							The team that plans and executes online and offline media strategy is
							made up of analysts and buyers that base their decisions on the creative
							and commercial goals of brands.
						</p>
					</div>
					<div className='home-service-layer'></div>
				</div>
			</div>
			<div className='text-center pt-4 '>
				<button
					className='p-2 text-black-50'
					style={{ background: 'white', color: 'white' }}
					onClick={gotoBtn}
				>
					<Link to='/service' element={<Service />}>
						{' '}
						<PlayCircleIcon /> Visit Our Service Page
					</Link>
				</button>
			</div>
		</div>
	);
};

export default HomeServices;
