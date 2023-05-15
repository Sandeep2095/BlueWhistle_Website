import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../components/about/About';

const HeroSectionCard = () => {
	const gotoBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<div
			className='col-md-4 border-0 heroseccard animate__animated animate__fadeInRight'
			style={{
				position: 'absolute',
				right: '15%',
				top: '60.8%',
				background: '#0e3252',
			}}
		>
			<div className='row'>
				<div className='d-flex p-5 justify-content-around align-items-end'>
					<div className='text-white'>
						<h1>
							Creative <br /> Business <br /> Experts
						</h1>
						<span className='about-card-line' style={{ background: '#fff' }}></span>
					</div>
					<div className='py-4'>
						<button className='btn btn-light px-4' onClick={gotoBtn}>
							<Link to='/about' element={<About />}>
								Read More
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSectionCard;
