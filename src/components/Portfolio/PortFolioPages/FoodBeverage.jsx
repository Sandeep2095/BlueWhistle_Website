import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import image from '../../../media/portbanner.jpg';

import img1 from '../../../media/New folder/Batido/ba (1).jpg';
import img2 from '../../../media/New folder/backstreet/b (6).jpg';
import img3 from '../../../media/New folder/backstreet/b (4).jpg';
import img4 from '../../../media/New folder/backstreet/b (8).jpg';
import img5 from '../../../media/New folder/backstreet/b (9).jpg';
import img6 from '../../../media/New folder/backstreet/b (7).jpg';
import img7 from '../../../media/New folder/Batido/ba (6).jpg';
import img8 from '../../../media/New folder/Batido/ba (5).jpg';
import img9 from '../../../media/New folder/Batido/ba (7).jpg';
import img10 from '../../../media/New folder/Batido/ba (8).jpg';
import img11 from '../../../media/New folder/biryani/b1 (1).jpg';
import img12 from '../../../media/New folder/biryani/b1 (2).jpg';
import img13 from '../../../media/New folder/biryani/b1 (3).jpg';
import img14 from '../../../media/New folder/biryani/b1 (7).jpg';
import img15 from '../../../media/New folder/biryani/b1 (8).jpg';
import img16 from '../../../media/New folder/LBW/LBW (1).jpg';
import img17 from '../../../media/New folder/LBW/LBW (3).jpg';
import img18 from '../../../media/New folder/LBW/LBW (17).jpg';
import img19 from '../../../media/New folder/LBW/LBW (8).jpg';
import img20 from '../../../media/New folder/LBW/LBW (9).jpg';
import img21 from '../../../media/New folder/HideOut/Hide (20).jpg';
import img22 from '../../../media/New folder/HideOut/Hide (37).jpg';
import img23 from '../../../media/New folder/HideOut/Hide (16).jpg';
import img24 from '../../../media/New folder/HideOut/Hide (22).jpg';
import img25 from '../../../media/New folder/HideOut/Hide (4).jpg';

const FoodBeverage = () => {
	const all = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
		img17,
		img18,
		img19,
		img20,
		img21,
		img22,
		img23,
		img24,
		img25,
	];
	const branding = [img1, img2, img3, img25, img20, img14, img10];
	const communication = [img7, img21];
	const packaging = [img4, img3, img18, img19, img20, img11, img5];
	const design = [img1, img2, img3, img6, img7, img23, img17, img11];
	const digital = [
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img5,
		img6,
		img8,
		img9,
		img10,
		img11,
	];

	const [currCollection, setCurrCollection] = useState(all);
	const [currFilter, setCurrFilter] = useState('all');

	useEffect(() => {
		console.log('Comp render');
	}, [currCollection, currFilter]);

	return (
		<div>
			<div className='portfolio-top-container'>
				<img
					className='page-top-image'
					style={{ width: '100%' }}
					src={image}
					alt='page top'
				/>
				<h2 className='portfolio-text display-1 text-uppercase'>Food & Beverage</h2>
			</div>

			<div className='container-fluid'>
				<hr />
				<div className='filter-component-container'>
					<div className='filter-container'>
						<div
							className={
								'filter-item ' + (currFilter === 'all' && 'active-filter-item')
							}
							onClick={() => {
								setCurrCollection(all);
								setCurrFilter('all');
							}}
						>
							All
						</div>
						<div
							className={
								'filter-item ' + (currFilter === 'branding' && 'active-filter-item')
							}
							onClick={() => {
								setCurrCollection(branding);
								setCurrFilter('branding');
							}}
						>
							BRANDING
						</div>
						<div
							className={
								'filter-item ' + (currFilter === 'packaging' && 'active-filter-item')
							}
							onClick={() => {
								setCurrCollection(packaging);
								setCurrFilter('packaging');
							}}
						>
							PACKAGING
						</div>
						<div
							className={
								'filter-item ' +
								(currFilter === 'communication' && 'active-filter-item')
							}
							onClick={() => {
								setCurrCollection(communication);
								setCurrFilter('communication');
							}}
						>
							COMMUNICATION
						</div>
						<div
							className={
								'filter-item ' + (currFilter === 'design' && 'active-filter-item')
							}
							onClick={() => {
								setCurrCollection(design);
								setCurrFilter('design');
							}}
						>
							DESIGN
						</div>
						<div
							className={
								'filter-item ' + (currFilter === 'digital' && 'active-filter-item')
							}
							onClick={() => {
								setCurrCollection(digital);
								setCurrFilter('digital');
							}}
						>
							DIGITAL
						</div>
					</div>
				</div>

				<Box
					sx={{
						width: 'auto',
					}}
				>
					<Masonry
						columns={{ sx: 1, sm: 2, md: 4, lg: 4 }}
						spacing={2}
						style={{ margin: '0px' }}
					>
						{currCollection.map((item) => (
							<div className='img-container' data-aos='fade-up'>
								<img
									src={item}
									alt={item.title}
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
			</div>
		</div>
	);
};
export default FoodBeverage;
