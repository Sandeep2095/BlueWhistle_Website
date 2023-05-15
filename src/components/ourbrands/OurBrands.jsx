import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './OurBrands.css';
import ourbrands from '../../media/lineOfBusiness.png';
// import { MdNetworkCheck } from 'react-icons/md';
import Press from '../../media/Press.jpg';

import Radio from '../../media/Radio.jpg';
import Internet from '../../media/Internet.jpg';
import OutofHome from '../../media/OutofHome.jpg';
import TV from '../../media/TV.jpg';
import Cinema from '../../media/Cinema.jpg';

const OurBrands = () => {
	return (
		<div
			style={{ borderLeft: '2px solid white', borderRight: '2px solid white' }}
			className='custom-section-container'
		>
			<div className='f-center brand-container'>
				<div>
					<LazyLoadImage
						effect='blur'
						className='brands'
						src={ourbrands}
						alt='our achievements'
					/>
				</div>
				<div className='brands-content'>
					<div>
						<div
							style={{
								position: 'relative',
								width: 'fit-content',
								margin: '0 auto',
							}}
						>
							<h1
								style={{ width: 'fit-content', position: 'relative' }}
								className='custom-section-heading'
							>
								LINE OF BUSINESS
							</h1>
							<div className='our-brands-heading'>
								<div className='red-horizontal-line'></div>
								<p style={{ marginLeft: '10px', fontWeight: 'bolder' }}>Our Brands</p>
							</div>
						</div>
						<p className='brands-para'>
							Blue Whistle is a house of brainstorming ideas and iconic branding
							services that offers multi-platform, multi-generational, and
							multicultural brand experiences and customer acquisition opportunities
							using modern marketing tools. A team of young and creative people with
							experience in the retail sector is trying to approach people and connect
							with them in their everyday lives through its branding and advertising
							services on ATL, BTL, online, and out-of-home media.
						</p>
						<div className='icons-set-1'>
							<div className='icon-item'>
								<div className='round-div f-center'>
									<img
										style={{ height: '50px', width: '50px' }}
										src={TV}
										alt=''
										className='icon-img'
									/>
								</div>
								<div className='round-title'>Television</div>
							</div>
							<div className='icon-item'>
								<div className='round-div f-center'>
									<img
										style={{ height: '50px', width: '50px' }}
										src={Internet}
										alt=''
										className='icon-img'
									/>
									{/* <MdNetworkCheck className='icon-img' /> */}
								</div>
								<div className='round-title'>Internet</div>
							</div>
							<div className='icon-item'>
								<div className='round-div f-center'>
									<img
										style={{ height: '50px', width: '50px' }}
										src={Press}
										alt=''
										className='icon-img'
									/>
									{/* <MdNetworkCheck className='icon-img' /> */}
								</div>
								<div className='round-title'>Press</div>
							</div>
						</div>
						{/* ---------- */}
						<div className='icons-set-2'>
							<div className='icon-item'>
								<div className='round-div f-center'>
									<img
										style={{ height: '50px', width: '50px' }}
										src={OutofHome}
										alt=''
										className='icon-img'
									/>
								</div>
								<div className='round-title'>Out of Home</div>
							</div>
							<div className='icon-item'>
								<div className='round-div f-center'>
									<img
										style={{ height: '50px', width: '50px' }}
										src={Cinema}
										alt=''
										className='icon-img'
									/>
								</div>
								<div className='round-title'>Cinema</div>
							</div>
							<div className='icon-item'>
								<div className='round-div f-center'>
									<img
										style={{ height: '50px', width: '50px' }}
										src={Radio}
										alt=''
										className='icon-img'
									/>
								</div>
								<div className='round-title'>Radio</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurBrands;
