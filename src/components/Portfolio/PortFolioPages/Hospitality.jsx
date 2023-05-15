import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import image from '../../../media/portbanner.jpg';

import img2 from '../../../media/New folder/Red/Red (2).jpg';
import img3 from '../../../media/New folder/Red/Red (4).jpg';
import img4 from '../../../media/New folder/Red/Red (13).jpg';
import img5 from '../../../media/New folder/Red/Red (24).jpg';
import img6 from '../../../media/New folder/Red/Red (33).jpg';
import img26 from '../../../assests/hote.jpg';
import img7 from '../../../assests/hote2.jpg';
import img8 from '../../../assests/hote3.jpg';
import img9 from '../../../assests/hote4.jpg';
import img10 from '../../../assests/hote5.jpg';
import img11 from '../../../media/New folder/Chapaak/s (1).jpg';
import img12 from '../../../media/New folder/Chapaak/s (2).jpg';
import img13 from '../../../media/New folder/Chapaak/s (3).jpg';
import img14 from '../../../media/New folder/Chapaak/s (4).jpg';
import img15 from '../../../media/New folder/Chapaak/s (5).jpg';
import img16 from '../../../media/New folder/Palm/Palm (1).jpg';
import img17 from '../../../media/New folder/Palm/Palm (3).jpg';
import img18 from '../../../media/New folder/Palm/Palm (4).jpg';
import img20 from '../../../media/New folder/Palm/Palm (6).jpg';
import img21 from '../../../media/New folder/Umrao/Umrao (1).jpg';
import img31 from '../../../media/New folder/Umrao/Umrao (2).jpg';
import img22 from '../../../media/New folder/Umrao/Umrao (6).jpg';
import img23 from '../../../media/New folder/Umrao/Umrao (13).jpg';
import img24 from '../../../media/New folder/Umrao/Umrao (9).jpg';
import img25 from '../../../media/New folder/Umrao/Umrao (8).jpg';
import img1 from '../../../media/New folder/Amal/Amal (1).jpg';
import img29 from '../../../media/New folder/Amal/Amal (15).jpg';
import img27 from '../../../media/New folder/Amal/Amal (11).jpg';
import img28 from '../../../media/New folder/Amal/Amal (18).jpg';
import img30 from '../../../media/New folder/Amal/Amal (16).jpg';

const Hospitality = () => {
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

		img20,
		img21,
		img22,
		img23,
		img24,
		img25,
		img26,
		img27,
		img28,
		img29,
		img30,
	];
	const branding = [img1, img2, img3, img4, img5];
	const communication = [
		img4,
		img7,
		img3,
		img21,
		img22,
		img23,
		img24,
		img25,
		img26,
		img27,
	];

	const design = [img1, img2, img3, img6, img7, img3, img31];
	const digital = [
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img22,
		img23,
		img24,
		img25,
		img26,
		img27,
		img31,
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
				<h2 className='portfolio-text display-1'>HOSPITALITY</h2>
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
						{/* <div
							className={
								'filter-item ' + (currFilter === 'packaging' && 'active-filter-item')
							}
							onClick={() => {
								setCurrCollection(packaging);
								setCurrFilter('packaging');
							}}
						>
							PACKAGING
						</div> */}
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
export default Hospitality;
