import React from 'react';
import './ClientReviews.css';
import review_1_img from '../../media/pankaj.jpg';
import review_2_img from '../../media/akashdeep.jpg';
import review_3_img from '../../media/rahul.jpg';

import { ImQuotesLeft } from 'react-icons/im';
import { MdOutlineNavigateNext } from 'react-icons/md';

const ClientReviews = () => {
	return (
		<div
			style={{ background: 'white' }}
			className='custom-section-container client-reviews-padding'
		>
			<div
				id='carouselExampleIndicators'
				className='carousel slide carousel-slide-in'
				data-bs-ride='true'
			>
				<div
					style={{ textAlign: 'center', fontFamily: 'Kanit' }}
					className='orange-text'
				>
					{/* <span>Over 10,000 designs ,</span> */}
					<div className='happy-txt'>Happy Retained Clients</div>
				</div>
				<div class='carousel-inner custom-carousel-inner'>
					<div class='carousel-item active'>
						{/* first review container */}
						<div className='review-cont'>
							<div className='review-img-part'>
								<div className='review-img-cont'>
									<ImQuotesLeft className='quotation-mark' />
									<div className='img-round-bg'></div>
									<img className='review-img' src={review_1_img} alt='client review' />
								</div>
							</div>
							<div className='review-text-part'>
								<h5 className='review-txt'>
									“I do not believe they are just our service provider, I can see my
									image in him when I was his age.”
								</h5>
								<h4
									style={{
										marginTop: '30px',
										color: 'black',
										fontWeight: 'bold',
										letterSpacing: '1px',
									}}
								>
									Pankaj K Choudhary
								</h4>
								<h4
									style={{
										marginTop: '20px',
										color: 'rgb(102, 102, 102)',
										fontWeight: 'normal',
										letterSpacing: '1px',
									}}
								>
									Dimension Websoft
								</h4>
							</div>
						</div>
					</div>
					<div class='carousel-item'>
						{/* second review container */}
						<div className='review-cont'>
							<div className='review-img-part'>
								<div className='review-img-cont'>
									<ImQuotesLeft className='quotation-mark' />
									<div className='img-round-bg'></div>
									<img className='review-img' src={review_2_img} alt='client review' />
								</div>
							</div>
							<div className='review-text-part'>
								<h5 className='review-txt'>
									“Akashdeep (LBW) says Clean bowled kr diya , Many agencies were coming
									up when they entered and to be honest, I was not very interested at
									first, that was the time I would say inhone "Clean bowled kar diya".
									The best part of this agency is the connection and the type of
									imagination they have for us. I take pride in sharing their creativity
									and content.”
								</h5>
								<h4
									style={{
										marginTop: '30px',
										color: 'black',
										fontWeight: 'bold',
										letterSpacing: '1px',
									}}
								>
									Akashdeep
								</h4>
								<h4
									style={{
										marginTop: '20px',
										color: 'rgb(102, 102, 102)',
										fontWeight: 'normal',
										letterSpacing: '1px',
									}}
								>
									Clean Bowled Kar Diya
								</h4>
							</div>
						</div>
					</div>
					<div class='carousel-item'>
						{/* third review container */}
						<div className='review-cont'>
							<div className='review-img-part'>
								<div className='review-img-cont'>
									<ImQuotesLeft className='quotation-mark' />
									<div className='img-round-bg'></div>
									<img className='review-img' src={review_3_img} alt='client review' />
								</div>
							</div>
							<div className='review-text-part'>
								<h5 className='review-txt'>
									“Says, I was not expecting I would get such an agency to work with, in
									patna where I believe people lag the concept of media marketing, But
									with Blue Whistle I found a bunch of very young and dynamic minds
									detailing on their work taking their efforts to a level of amazement”
								</h5>
								<h4
									style={{
										marginTop: '30px',
										color: 'black',
										fontWeight: 'bold',
										letterSpacing: '1px',
									}}
								>
									Rahul Naman
								</h4>
								<h4
									style={{
										marginTop: '20px',
										color: 'rgb(102, 102, 102)',
										fontWeight: 'normal',
										letterSpacing: '1px',
									}}
								>
									Hotel Amalfi Grand
								</h4>
							</div>
						</div>
					</div>
				</div>
				<button
					class='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide='next'
				>
					<span
						style={{ backgroundImage: 'none' }}
						class='carousel-control-next-icon'
						aria-hidden='true'
					>
						<MdOutlineNavigateNext
							style={{ color: 'rgb(102, 102, 102)', fontSize: '50px' }}
						/>
					</span>
					<span class='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
};

export default ClientReviews;
