import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import image from '../../../media/portbanner.jpg';

import img2 from '../../../media/New folder/Aveta/Aveta (2).jpg';
import img3 from '../../../media/New folder/Aveta/Aveta (3).jpg';
import img4 from '../../../media/New folder/Aveta/Aveta (5).jpg';
import img5 from '../../../media/New folder/Aveta/Aveta (7).jpg';
import img6 from '../../../media/New folder/Aveta/Aveta (4).jpg';
import img26 from '../../../media/New folder/Aveta/Aveta (8).jpg';
import img7 from '../../../media/New folder/Aveta/Aveta (9).jpg';
import img11 from '../../../media/New folder/Aveta/Aveta (11).jpg';
import img8 from '../../../media/New folder/Fitness/Fitne (1).jpg';
import img9 from '../../../media/New folder/Fitness/Fitne (2).jpg';
import img10 from '../../../media/New folder/Fitness/Fitne (4).jpg';
import img12 from '../../../media/New folder/Fitness/Fitne (3).jpg';
import img1 from '../../../media/New folder/Aura/Aura (1).jpg';
import img29 from '../../../media/New folder/Aura/Aura (10).jpg';
import img27 from '../../../media/New folder/Aura/Aura (11).jpg';
import img28 from '../../../media/New folder/Aura/Aura (5).jpg';
import img30 from '../../../media/New folder/Aura/Aura (7).jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Health = () => {
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
		img26,
		img27,
		img28,
		img29,
		img30,
	];
	const branding = [img1, img2, img3, img4, img5];
	const communication = [img4, img7, img3, img30, img2];
	const design = [img1, img2, img3, img6, img7, img3];
	const digital = [img2, img3, img4, img5, img6, img7];

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
				<h2 className='portfolio-text display-1'>HEALTH</h2>
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
								<LazyLoadImage
									effect='blur'
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

export default Health;
