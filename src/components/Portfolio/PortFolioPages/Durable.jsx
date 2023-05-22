import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import image from '../../../media/portbanner.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import img1 from '../../../media/New folder/Hacekar/Hacekar (1).jpg';
import img2 from '../../../media/New folder/Hacekar/Hacekar (2).jpg';
import img3 from '../../../media/New folder/Hacekar/Hacekar (3).jpg';
import img4 from '../../../media/New folder/Hacekar/Hacekar (4).jpg';
import img5 from '../../../media/New folder/Hacekar/Hacekar (5).jpg';
import img6 from '../../../media/New folder/Hacekar/Hacekar (6).jpg';
import img7 from '../../../media/New folder/Hacekar/Hacekar (7).jpg';
import img8 from '../../../media/New folder/Hacekar/Hacekar (8).jpg';
import img9 from '../../../media/New folder/Hacekar/Hacekar (9).jpg';
import img10 from '../../../media/New folder/Hacekar/Hacekar (10).jpg';
import img11 from '../../../media/New folder/Hacekar/Hacekar (11).jpg';
import img12 from '../../../media/New folder/Hacekar/Hacekar (12).jpg';
import img13 from '../../../media/New folder/Hacekar/Hacekar (13).jpg';
import img14 from '../../../media/New folder/Hacekar/Hacekar (14).jpg';
import img15 from '../../../media/New folder/Hacekar/Hacekar (15).jpg';

const Durable = () => {
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
	];
	const branding = [img2, img3, img4, img5, img15];
	const communication = [img1, img4, img7, img3, img2];
	const design = [img1, img2, img3, img6, img7, img3];
	const digital = [img2, img3, img4, img5, img6, img7, img11, img13];

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
				<h2 className='portfolio-text display-1'>DURABLE</h2>
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

export default Durable;
