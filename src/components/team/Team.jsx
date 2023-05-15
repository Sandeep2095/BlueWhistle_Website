import React from 'react';
import './Team.css';
import image1 from '../../media/1.jpg';
import image2 from '../../media/2.jpg';
import image3 from '../../media/3.jpg';
import image5 from '../../media/5.jpeg';
import image6 from '../../media/6.jpg';
import image7 from '../../media/7.jpg';
import image8 from '../../media/8.jpg';
import image11 from '../../media/11.jpg';
import image12 from '../../media/9.jpg';
import image13 from '../../media/13.jpg';
import image14 from '../../media/14.jpg';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Team = () => {
	const iconStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0px',
		padding: '0px',
	};

	const socialIcons = {
		width: '2rem',
		height: '2rem',
	};

	return (
		<div style={{ background: 'rgb(14, 50, 82)' }} className='container-fluid'>
			<div className='container-fluid custom-page-heading display-2'>Our Team</div>

			<div className='row shadow'>
				<div className='custom-team-container'>
					{/* Our Leaders */}
					<div>
						<div className='team_sub_heading team_leader_top'>
							<h2>Our Leaders</h2>
						</div>
						<div className='team-sm'>Our Leaders</div>
						<div className='container bg-light px-2 mb-5 mt-3 w-auto'>
							<div className='row p-0 d-flex justify-content-evenly'>
								{/*  */}
								{/* Abhijeet Gautam Team Card */}
								<div
									class='card team-leaders our-leaders'
									style={{ width: '24rem', padding: '0' }}
								>
									<LazyLoadImage
										effect='blur'
										src={image1}
										class='card-img-top team-image'
										alt='teamPage'
									/>
									<div class='card-body'>
										<p class='leaders-card-text'>
											<h3>Abhijeet Gautam</h3>
											<h6>Chief Creative Officer</h6>
											<p className='text-center' style={{ textAlign: 'justify' }}>
												A workaholic bank of weird thoughts and powerful presentations.
												Passionate Creative Communication Specialist with more than 7 years
												of experience contributing to our strategic planning and
												implementation.
											</p>
											<div className='team-social-links'>
												<ul style={iconStyle}>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/abhijeet-gautam-844212114/'
															target='blank'
														>
															<LinkedInIcon style={socialIcons} />
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
								</div>

								{/* Prince Sarraf Team Card */}
								<div
									class='card team-leaders col-reverse'
									style={{ width: '23rem', padding: '0' }}
								>
									<div class='card-body'>
										<p class='leaders-card-text'>
											<h3>Prince Sarraf</h3>
											<h6>Administrative Head</h6>
											<p className='text-center'>
												He is ready to answer any of your queries. If you have any questions
												regarding professional services, I'm your go to person to get it
												resolved.
											</p>
											<div className='team-social-links'>
												<ul style={iconStyle}>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/prince-sarraf-746b3997/'
															target='_blank'
															rel='noreferrer'
														>
															<LinkedInIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />{' '}
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
									<LazyLoadImage
										effect='blur'
										src={image2}
										class='card-img-top team-image'
										alt='teamPage'
									/>
								</div>
								{/* Abhinay Gautam Team Card */}
								<div class='card team-leaders' style={{ width: '24rem', padding: '0' }}>
									<LazyLoadImage
										effect='blur'
										src={image3}
										class='card-img-top team-image'
										alt='teamPage'
									/>
									<div class='card-body'>
										<p class='leaders-card-text'>
											<h3>Abhinay Gautam</h3>
											<h6 className='text-center'>
												Business Associate- Operations & Growth
											</h6>
											<p className='text-center'>
												In the world of average ideas, his ideas are savage. He has an eye
												for innovation and holds expertise in marketing.
											</p>
											<div className='team-social-links'>
												<ul style={iconStyle}>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/abhinay-gautam-singh-471929112/'
															target='_blank'
															rel='noreferrer'
														>
															<LinkedInIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />{' '}
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Graphic Designer */}
					<div>
						<div className='team_sub_heading team_top_graphic'>
							<div>
								<h2>Graphic Designer</h2>
							</div>
						</div>
						<div className='team-sm'>Graphic Designer</div>
						<div className='container bg-light p-2 mb-5 mt-3'>
							<div className='row mx-auto d-flex justify-content-evenly'>
								{/* Tasneem Card */}
								<div className='' style={{ width: '22rem', padding: '0' }}>
									<LazyLoadImage
										effect='blur'
										src={image8}
										class='card-img-top'
										alt='teamPage'
									/>
									<div class='card-body'>
										<p class='card-texts'>
											<h3>Tasneem Anjum</h3>
											<h6>Graphic Designer</h6>
											<p className='text-center'>
												Silence is my way of violence. Don't be deceived by my face, I might
												look Paavam but people say I'm a sly. <br />
												The secret to making life simple is telling yourself{' '}
												<strong>"Waqt hai, guzar hi jaega"</strong> .
											</p>
											<div className='team-social-links'>
												<ul style={iconStyle}>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/tasneem-anjum-48a019201/'
															target='_blank'
															rel='noreferrer'
														>
															<LinkedInIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />{' '}
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
								</div>

								{/* Yash Sinha Card */}
								<div class='' style={{ width: '22rem', padding: '0' }}>
									<LazyLoadImage
										effect='blur'
										src={image5}
										class='card-img-top'
										alt='teamPage'
									/>
									<div class='card-body'>
										<p class='card-texts'>
											<h3>Yash Sinha</h3>
											<h6>Graphic Designer</h6>
											<p className='text-center'>
												"Digital is all about mixing creativity and technology for
												business—to make our client'card-texts businesses better, to make
												our business better, and to make all business better for people, for
												real lives, for society.
											</p>
											<div className='team-social-links'>
												<ul style={iconStyle}>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/yash-sinha-b62a0b206/'
															target='_blank'
															rel='noreferrer'
														>
															<LinkedInIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />{' '}
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* CopyWriter */}
					<div>
						<div className='team_sub_heading team_top_copywriter'>
							<div>
								<h2>CopyWriter</h2>
							</div>
						</div>
						<div className='team-sm'>CopyWriter</div>
						<div className='container bg-light p-2 mt-3 mb-5'>
							<div className='row mx-auto d-flex justify-content-evenly'>
								{/* Divya Shree Mishra Card */}
								<div class='' style={{ width: '22rem', padding: '0' }}>
									<img src={image6} class='card-img-top' alt='teamPage' />
									<div class='card-body'>
										<p class='card-texts'>
											<h3>Divya Shree Mishra</h3>
											<h6>CopyWriter</h6>
											<p className='text-center'>
												Love to read books, write stories and poems. I like to live in
												imaginary world so the things get easier to be creative.
											</p>
											<div className='team-social-links'>
												<ul style={iconStyle}>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/divya-shree-mishra-a45949203'
															target='_blank'
															rel='noreferrer'
														>
															<LinkedInIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />{' '}
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
								</div>

								{/* Vijay Shankar Singh Card */}
								<div class='col-reverse' style={{ width: '22rem', padding: '0' }}>
									<div class='card-body'>
										<p class='card-texts'>
											<h3>Vijay Shankar Singh</h3>
											<h6>CopyWriter</h6>
											<p className='text-center'>
												Always eager to explore new dimensions of opportunities and like to
												work with it.
											</p>
											<div className='team-social-links'>
												<ul style={iconStyle}>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/vijay-shanker-singh-he-him-87b747215/?trk=people-guest_people_search-card&originalSubdomain=in'
															target='_blank'
															rel='noreferrer'
														>
															<LinkedInIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />{' '}
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
									<img src={image11} class='card-img-top' alt='Team Page' />
								</div>

								{/* Aparna Sharma Card */}
								<div class='' style={{ width: '22rem', padding: '0' }}>
									<img src={image13} class='card-img-top' alt='teamPage' />
									<div class='card-body'>
										<p class='card-texts'>
											<h3>Aparna Sharma</h3>
											<h6>CopyWriter</h6>
											<p className='text-center'>
												An imaginative soul with a passion for storytelling. Thirst for
												quality content drives me to learn, unlearn and redefine myself
												every day.
											</p>
											<div className='team-social-links'>
												<ul className='d-flex m-0 p-0'>
													<li>
														<a href='#!'>
															<FacebookIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a
															href='https://www.linkedin.com/in/aparna-sharma-85593a205'
															target='_blank'
															rel='noreferrer'
														>
															<LinkedInIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<TwitterIcon style={socialIcons} />{' '}
														</a>
													</li>

													<li>
														<a href='#!'>
															<InstagramIcon style={socialIcons} />{' '}
														</a>
													</li>
												</ul>
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Digital Marketing Executive */}
					<div>
						<div className='team_sub_heading team_top_exectives'>
							<h2>Digital Marketing Executive</h2>
						</div>
						<div className='team-sm'>Digital Marketing Executive</div>
						<div className='container bg-light p-2 mt-3 mb-5 d-flex'>
							<div class='row featurette d-flex justify-content-center align-items-center'>
								<div class='col-md-5'>
									<LazyLoadImage
										effect='blur'
										class='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
										width='500'
										height='500'
										src={image12}
										alt=''
									/>
								</div>
								<div
									class='col-md-7 order-md-2 text-center f-center'
									style={{ height: '50vh', flexDirection: 'column', padding: '60px' }}
								>
									<h3>Mohd. Rishakat</h3>
									<h6 style={{ color: '#b13f44' }}>Digital Marketing Executive</h6>
									<p style={{ textAlign: 'justify' }}>
										An individual responsible for creating content and turning ideas into
										words for the use of advertising through articles, publications,
										team-social media as well as other internet content.
									</p>
									<div className=''>
										<ul style={iconStyle}>
											<li>
												<a href='#!'>
													<FacebookIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a
													href='https://www.linkedin.com/in/md-rishakat-5840791b0/'
													target='_blank'
													rel='noreferrer'
												>
													<LinkedInIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a href='#!'>
													<TwitterIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a href='#!'>
													<InstagramIcon style={socialIcons} />{' '}
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Video editor & Graphic Designer */}
					<div>
						<div className='team_sub_heading team_top_editor'>
							<h2>Video editor & Graphic Designer</h2>
						</div>
						<div className='team-sm'>Video editor & Graphic Designer</div>
						<div className='container bg-light p-2 mt-3 mb-5 d-flex'>
							<div class='row featurette d-flex justify-content-center align-items-center'>
								<div class='col-md-5'>
									<LazyLoadImage
										effect='blur'
										class='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
										width='500'
										height='500'
										src={image7}
										alt=''
									/>
								</div>
								<div
									class='col-md-7 order-md-2 text-center f-center'
									style={{ height: '50vh', flexDirection: 'column', padding: '60px' }}
								>
									<h3>Mohd. Rishakat</h3>
									<h6 style={{ color: '#b13f44' }}>Video Editor & Graphic Designer</h6>
									<p style={{ textAlign: 'justify' }}>
										An individual responsible for creating content and turning ideas into
										words for the use of advertising through articles, publications,
										team-social media as well as other internet content.
									</p>
									<div className=''>
										<ul style={iconStyle}>
											<li>
												<a href='#!'>
													<FacebookIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a
													href='https://www.linkedin.com/in/md-rishakat-5840791b0/'
													target='_blank'
													rel='noreferrer'
												>
													<LinkedInIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a href='#!'>
													<TwitterIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a href='#!'>
													<InstagramIcon style={socialIcons} />{' '}
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Web Developers */}
					<div>
						<div className='team_sub_heading team_top_developers'>
							<h2>Web Developer</h2>
						</div>
						<div className='team-sm'>Web Developer</div>
						<div className='container bg-light p-2 mt-3 mb-5 d-flex'>
							<div class='row featurette d-flex justify-content-center align-items-center'>
								<div class='col-md-5'>
									<LazyLoadImage
										effect='blur'
										class='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
										width='500'
										height='500'
										src={image14}
										alt=''
									/>
								</div>
								<div
									class='col-md-7 order-md-2 text-center f-center'
									style={{ height: '50vh', flexDirection: 'column', padding: '60px' }}
								>
									<h3>Sandeep Sharma</h3>
									<h6 style={{ color: '#b13f44' }}>Front end (ReactJS)</h6>
									<p style={{ textAlign: 'justify' }}>
										A Software developer with an intent of solving the practical problems
										with the help of technology.
									</p>
									<div className=''>
										<ul style={iconStyle}>
											<li>
												<a href='#!'>
													<FacebookIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a
													href='https://www.linkedin.com/in/sandeep-sharma-3763901a5/'
													target='_blank'
													rel='noreferrer'
												>
													<LinkedInIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a href='https://wa.me/+919810028992'>
													<WhatsAppIcon style={socialIcons} />{' '}
												</a>
											</li>

											<li>
												<a href='#!'>
													<InstagramIcon style={socialIcons} />{' '}
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
