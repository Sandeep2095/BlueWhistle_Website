import React from 'react';
import './HrProcessComponent.css';

import img_hr from '../../media/hr_img1.png';

const HrProcessComponent = () => {
	return (
		<>
			<div
				style={{ border: '2px solid white' }}
				className='custom-section-container hr-margin'
			>
				<div className='hr-bg-box'></div>
				<div className='hr-cont' id='hr-cont'>
					<div className='hr-right-part'>
						<img
							style={{ width: '100%' }}
							className='movable'
							data-speed='5'
							src={img_hr}
							alt='hr section'
						/>
						<div className='hr-fixed-circle movable' data-speed='10'>
							<h3
								style={{
									textAlign: 'center',
									fontWeight: 'bold',
									color: 'white',
								}}
							>
								Searching <br /> For The
								<br /> Qualified One
							</h3>
						</div>
					</div>
					<div className='hr-left-part f-center'>
						<div>
							<h1
								style={{ fontWeight: '700', color: '#fff' }}
								className='custom-section-heading'
							>
								Picking up the <br />
								Right One
							</h1>
							<div style={{ marginTop: '40px' }}>
								<h3 style={{ marginTop: '20px', color: 'white' }}>{''}</h3>
								<p
									style={{
										color: '#fff',
										marginTop: '30px',
										textAlign: 'justify',
									}}
								>
									Our key goal as Blue Whistle Advertising expands is to pick the
									appropriate fit. All employees at Blue Whistle Advertising are treated
									fairly and consistently thanks to HR policies, which also ensure that
									their contributions to the company's success are adequately
									acknowledged and rewarded. The Blue Whistle demands certain things from
									every employee as they do, and we expect the same things in return.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

//

export default HrProcessComponent;
