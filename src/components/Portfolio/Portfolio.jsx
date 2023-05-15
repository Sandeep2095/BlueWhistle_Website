import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

// pages
import Health from './PortFolioPages/Health';
import Lifestyle from './PortFolioPages/Lifestyle';
import RealEstate from './PortFolioPages/RealEstate';
import Hospitality from './PortFolioPages/Hospitality';
import FoodBeverage from './PortFolioPages/FoodBeverage.jsx';
import Education from './PortFolioPages/Education.jsx';
import Technology from './PortFolioPages/Technology.jsx';
import Durable from './PortFolioPages/Durable.jsx';
import Automobile from './PortFolioPages/Automobile.jsx';

// images and gifs
import image from '../../media/portbanner.jpg';
import img1 from '../../media/Categories/1.png';
import img2 from '../../media/Categories/2.jpg';
import img3 from '../../media/Categories/3.avif';
import img4 from '../../media/Categories/4.avif';
import img5 from '../../media/Categories/5.avif';
import img6 from '../../media/Categories/6.avif';
import img7 from '../../media/Categories/7.jpg';
import img8 from '../../media/Categories/9.avif';
import img9 from '../../media/Categories/8.avif';

const Categories = [
	{ src: img1, title: 'Health', link: '/health', comp: Health },
	{ src: img2, title: 'Hospitality', link: '/hospitality', comp: Hospitality },
	{ src: img3, title: 'Real Estate', link: '/realEstate', comp: RealEstate },
	{
		src: img4,
		title: 'Food & Beverages',
		link: '/foodBeve',
		comp: FoodBeverage,
	},
	{ src: img5, title: 'LifeStyle', link: '/lifestyle', comp: Lifestyle },
	{ src: img6, title: 'Education', link: '/education', comp: Education },
	{ src: img7, title: 'Technology', link: '/technology', comp: Technology },
	{ src: img8, title: 'Durable', link: '/durable', comp: Durable },
	{ src: img9, title: 'Automobile', link: '/automobile', comp: Automobile },
];

const Portfolio = () => {
	return (
		<div className='portfolio-container'>
			<div className='portfolio-top-container'>
				<img
					className='page-top-image'
					style={{ width: '100%' }}
					src={image}
					alt='page top'
				/>
				<h2 className='portfolio-text display-1'>PORTFOLIO</h2>
			</div>
			<div className='container-fluid my-5'>
				<div class='row row-cols-2 row-cols-md-5 g-5'>
					{Categories.map((category) => (
						<div class='col'>
							<div class='card h-100'>
								<Link to={`${category.link}`} element {...(<category.comp />)}>
									<img src={category.src} class='card-img-top' alt='port' />
								</Link>
								<div class='card-body'>
									<h4 className='card-title text-center'>{category.title}</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
