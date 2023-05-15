import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import image from '../../../media/portbanner.jpg';

import img2 from '../../../media/New folder/Kasturi/Kasturi (2).jpg';
import img3 from '../../../media/New folder/Kasturi/Kasturi (4).jpg';
import img4 from '../../../media/New folder/Kasturi/Kasturi (13).jpg';
import img5 from '../../../media/New folder/Kasturi/Kasturi (24).jpg';
import img6 from '../../../media/New folder/Kasturi/Kasturi (1).jpg';
import img26 from '../../../media/New folder/Kasturi/Kasturi (26).jpg';
import img37 from '../../../media/New folder/Kasturi/Kasturi (28).jpg';
import img38 from '../../../media/New folder/Kasturi/Kasturi (29).jpg';
import img36 from '../../../media/New folder/Kasturi/Kasturi (55).jpg';
import img1 from '../../../media/New folder/Ratna/Ratna (1).jpg';
import img7 from '../../../media/New folder/Ratna/Ratna (40).jpg';
import img8 from '../../../media/New folder/Ratna/Ratna (25).jpg';
import img9 from '../../../media/New folder/Ratna/Ratna (37).jpg';
import img10 from '../../../media/New folder/Ratna/Ratna (41).jpg';
import img30 from '../../../media/New folder/Ratna/Ratna (36).jpg';
import img34 from '../../../media/New folder/Ratna/Ratna (14).jpg';
import img31 from '../../../media/New folder/Ratna/Ratna (2).jpg';
import img11 from '../../../media/New folder/swastik/s (1).jpg';
import img12 from '../../../media/New folder/swastik/s (2).jpg';
import img13 from '../../../media/New folder/swastik/s (3).jpg';
import img14 from '../../../media/New folder/swastik/s (4).jpg';
import img15 from '../../../media/New folder/swastik/s (5).jpg';
import img16 from '../../../media/New folder/did/did (1).jpg';
import img17 from '../../../media/New folder/did/did (3).jpg';
import img18 from '../../../media/New folder/did/did (4).jpg';
import img19 from '../../../media/New folder/did/did (8).jpg';
import img20 from '../../../media/New folder/did/did (2).jpg';
import img21 from '../../../media/New folder/ShreeHari/ShreeHari (33).jpg';
import img22 from '../../../media/New folder/ShreeHari/ShreeHari (48).jpg';
import img23 from '../../../media/New folder/ShreeHari/ShreeHari (46).jpg';
import img27 from '../../../media/New folder/ShreeHari/ShreeHari (1).jpg';
import img29 from '../../../media/New folder/ShreeHari/ShreeHari (38).jpg';
import img24 from '../../../media/New folder/ShreeHari/ShreeHari (13).jpg';
import img32 from '../../../media/New folder/ShreeHari/ShreeHari (44).jpg';
import img35 from '../../../media/New folder/ShreeHari/ShreeHari (12).jpg';
import img25 from '../../../media/New folder/ShreeHari/a8.jpg';
import img28 from '../../../media/New folder/sarraf/saraf (1).jpg';
import img33 from '../../../media/New folder/sarraf/saraf (6).jpg';

const Lifestyle = () => {
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
		img26,
	];
	const branding = [
		img1,
		img2,
		img3,
		img17,
		img18,
		img7,
		img27,
		img9,
		img10,
		img11,
		img12,
		img13,
	];
	const communication = [img6, img26, img25, img28, img29, img30, img31];
	const packaging = [
		img18,
		img19,
		img20,
		img11,
		img13,
		img14,
		img15,
		img16,
		img17,
		img18,
		img19,
	];
	const design = [
		img31,
		img32,
		img33,
		img34,
		img35,
		img19,
		img20,
		img21,
		img22,
		img23,
		img34,
		img35,
		img37,
		img36,
		img38,
	];
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
				<h2 className='portfolio-text display-1'>LIFESTYLE</h2>
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

export default Lifestyle;
