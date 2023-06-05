import React from 'react';
import logo from '../media/logo.png';

const ScreenLoader = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh',
				background: '#0e3252',
			}}
		>
			<div>
				<img style={{ height: '20vh' }} src={logo} alt='preloader logo' />
				{/* <h1 style={{fontFamily:"RegularCalson"}}>alankar jwellers</h1> */}
			</div>
		</div>
	);
};

export default ScreenLoader;
