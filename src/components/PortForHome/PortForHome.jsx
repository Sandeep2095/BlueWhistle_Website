import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom';

import img1 from '../../media/portforhome/Hide (1).jpg';
import img2 from '../../media/portforhome/Aveta (1).jpg';
import img3 from '../../media/portforhome/R1.jpg';
import img4 from '../../media/portforhome/Kasturi (1).jpg';
import img5 from '../../media/portforhome/Ratna (1).jpg';
import img6 from '../../media/portforhome/LBW (1).jpg';
import img7 from '../../media/portforhome/Satya (1).jpg';
import img8 from '../../media/portforhome/Fitne (1).jpg';
import img9 from '../../media/portforhome/Lerro.jpg';
import img10 from '../../media/portforhome/Auto.jpg';
import img11 from '../../media/portforhome/Packet.jpg';
import img12 from '../../media/portforhome/Hacker (1).jpg';
import img13 from '../../media/portforhome/ShreeHari (1).jpg';
import img14 from '../../media/portforhome/Palm (1).jpg';
import img15 from '../../media/portforhome/Cust (1).jpg';
import img16 from '../../media/portforhome/Umrao (1).jpg';
import img17 from '../../media/portforhome/Web.png';
import Portfolio from '../Portfolio/Portfolio';

const PortForHome = () => {
	const gotoBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const all = [
		{ src: img1 },
		{ src: img2 },
		{ src: img3 },
		{ src: img4 },
		{ src: img5 },
		{ src: img6 },
		{ src: img7 },
		{ src: img8 },
		{ src: img9 },
		{ src: img10 },
		{ src: img11 },
		{ src: img12 },
		{ src: img13 },
		{ src: img14 },
		{ src: img15 },
		{ src: img16 },
		{ src: img17 },
	];

	return (
		<div>
			<div className='container-fluid' style={{ background: '#0e3252' }}>
				<div className='port-for-home'>
					<h2>Advertising is all about stories you tell</h2>
				</div>

				<Box
					sx={{
						width: 'auto',
					}}
				>
					<Masonry
						columns={{ xs: 2, sm: 1, md: 4, lg: 4 }}
						spacing={2}
						style={{ margin: '0px' }}
					>
						{all.map((item) => (
							<div key={item.id}>
								<img
									src={`${item.src}?w=162&auto=format`}
									alt='portforHome'
									loading='lazy'
									style={{
										borderBottomLeftRadius: 4,
										borderBottomRightRadius: 4,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '100%',
									}}
								/>
							</div>
						))}
					</Masonry>
				</Box>

				<div className='text-center py-5 '>
					<button
						className='p-2 text-black-50'
						style={{ background: 'white', color: 'white' }}
						onClick={gotoBtn}
					>
						<Link to='/portfolio' element={<Portfolio />}>
							{' '}
							<PlayCircleIcon /> Visit Our Portfolio Page
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PortForHome;
