import React from 'react';
import './Consulting.css';
import img_consulting from '../../media/consultingImage.png';

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const Consutling = () => {
	return (
		<>
			<div className='consulting-margin'>
				<div className='consulting-bg-box'></div>
				<div className='consulting-cont'>
					<div className='consulting-right-part'>
						<img
							style={{ width: '100%' }}
							className='movable'
							src={img_consulting}
							alt='consulting section'
							data-speed='5'
						/>
						<div className='fixed-circle movable' data-speed='10'>
							<h3
								style={{
									textAlign: 'center',
									fontWeight: 'bold',
									color: 'white',
								}}
							>
								<strong>
									Let <br />
									Creativity <br /> Echo
								</strong>
							</h3>
						</div>
					</div>
					<div className='consulting-left-part'>
						<div>
							<h1
								style={{ fontWeight: '700', color: 'white' }}
								className='custom-section-heading'
							>
								Blue Whistle Advertising
							</h1>
							<h2 style={{ marginTop: '20px', color: 'white' }}>
								{/* Digital Marketing Agency */}
							</h2>
							<p
								style={{
									color: '#fff',
									marginTop: '30px',
									textAlign: 'justify',
								}}
							>
								Our Blue Whistle digital marketing professionals are brimming with
								innovative ideas for increasing your leads , sales and income. We
								collaborate with customers to provide productive , flexible and
								enjoyable Marketing, Consulting and Training services. We'll improve
								your online presence to promote growth as rapidly as feasible, from
								concept through content development and campaign fullfillment.
							</p>
							<div className='consulting-features-cont'>
								<div className='consulting-features'>
									<AutoAwesomeOutlinedIcon className='col-white' sx={{ fontSize: 40 }} />
									<p className='font-20 col-white'>120 +</p>
									<p className='col-white'>Business Advices</p>
								</div>
								<div className='consulting-features'>
									<AutoAwesomeOutlinedIcon className='col-white' sx={{ fontSize: 40 }} />
									<p className='font-20 col-white'>90 +</p>
									<p className='col-white'>Clients</p>
								</div>
								<div className='consulting-features'>
									<AutoAwesomeOutlinedIcon className='col-white' sx={{ fontSize: 40 }} />
									<p className='font-20 col-white'>30 +</p>
									<p className='col-white'>Unique Advertising Campaigns</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Consutling;
