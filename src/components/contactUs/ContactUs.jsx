import React, { useState, useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
	const contactLeftCardStyle = {
		maxWidth: '20rem',
		background: 'black',
		opacity: '0.9',
		color: 'white',
	};

	const contactSocialLInks = {
		width: '2.5rem',
		height: '4rem',
	};

	const form = useRef();
	const [fullname, setFullname] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const onChangeFname = (e) => {
		setFullname(e.target.value);
	};

	const onChangeContact = (e) => {
		setContact(e.target.value);
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangeSubject = (e) => {
		setSubject(e.target.value);
	};

	const onChangeMessage = (e) => {
		setMessage(e.target.value);
	};

	const sendMessage = (e) => {
		e.preventDefault();

		if (
			fullname === '' ||
			contact === '' ||
			email === '' ||
			subject === '' ||
			message === ''
		) {
			alert('Please enter all the details ');
		} else {
			emailjs
				// mail goes to info@bluewhistle.com
				.sendForm(
					'service_xupxzur',
					'template_r6hxvos',
					form.current,
					'L20RcUIxRn8p8DdW4'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				)
				.then(() => {
					alert('Form submitted successfully , We will get back to you very soon,');
					setFullname('');
					setContact('');
					setEmail('');
					setSubject('');
					setMessage('');
				});
		}
	};

	return (
		<div className='container-fluid contact-bg-img'>
			<div className='row'>
				<div
					className='col-md-6 col-sm-6 p-4 add_links'
					// data-aos='fade-right'
					// data-aos-offset='300'
					// data-aos-easing='ease-in-sine'
				>
					<div className=''>
						<div class='card text-bg-dark mb-3 lh-lg' style={contactLeftCardStyle}>
							<div class='card-body'>
								<h5 class='card-title'>Marketing</h5>
								<p class='card-text'>
									<LocalPhoneIcon style={{ marginRight: '5px' }} /> +919069959637 <br />
									<LocalPhoneIcon style={{ marginRight: '5px' }} /> +919122200475 <br />
									<MailOutlineIcon style={{ marginRight: '5px' }} />{' '}
									info@bluewhistle.co.in
								</p>
							</div>
						</div>

						<div class='card text-bg-dark mb-3 lh-lg' style={contactLeftCardStyle}>
							<div class='card-body'>
								<h5 class='card-title'>General Contact</h5>
								<p class='card-text'>
									<LocalPhoneIcon style={{ marginRight: '5px' }} /> +918709749629 <br />
									<LocalPhoneIcon style={{ marginRight: '5px' }} /> +917701920181 <br />
									<MailOutlineIcon style={{ marginRight: '5px' }} />{' '}
									info@bluewhistle.co.in
								</p>
							</div>
						</div>

						<div class='card text-bg-dark mb-3 lh-lg' style={contactLeftCardStyle}>
							<div class='card-body'>
								<h5 class='card-title'>Business Contact</h5>
								<p class='card-text'>
									<LocalPhoneIcon style={{ marginRight: '5px' }} /> +919069959637 <br />
									<MailOutlineIcon style={{ marginRight: '5px' }} />{' '}
									business@bluewhistle.co.in
									<div className='d-flex mt-2'>
										<LocationOnIcon style={{ marginRight: '5px' }} /> Anand Tower, 4A,
										Exhibition Rd beside Pantaloons, Patna, Bihar 800001 <br />
									</div>
								</p>
							</div>
						</div>

						<div class='card text-bg-dark mb-3 lh-lg' style={contactLeftCardStyle}>
							<div class='card-body'>
								<h5 class='card-title'>Connect With Us</h5>
								<div class='card-text'>
									<ul className='d-flex align-items-center'>
										<li>
											<a
												href='https://www.facebook.com/BlueWhistleAdvertising?mibextid=ZbWKwL'
												target='blank'
											>
												<FacebookIcon style={contactSocialLInks} />
											</a>
										</li>
										<li>
											<a
												href='https://www.linkedin.com/company/blue-whistle-advertising/'
												target='blank'
											>
												<LinkedInIcon style={contactSocialLInks} />
											</a>
										</li>
										<li>
											<a
												href='https://instagram.com/bluewhistleadvertising?igshid=YmMyMTA2M2Y='
												target='blank'
											>
												<InstagramIcon style={contactSocialLInks} />
											</a>
										</li>
										<li>
											<a
												href='https://twitter.com/BlueWhistleAdv2?t=VyS73bXANRPPT4pBFunOYQ&s=09'
												target='blank'
											>
												<TwitterIcon style={contactSocialLInks} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-6'>
					<div className=''>
						<div className='contactform' id='contactform'>
							<form ref={form}>
								<h1 className=''>Request a Call Back</h1>
								<p className='text-white'>
									To get solution for your Consultancy & Human Resource Recruitment
								</p>

								<div className='inputBox'>
									<input
										type='text'
										name='fullname'
										value={fullname}
										onChange={onChangeFname}
										required='Please Enter Name'
									/>
									<span>
										{' '}
										<PersonIcon /> NAME
									</span>
								</div>
								<div className='inputBox'>
									<input
										type='number'
										name='contact'
										value={contact}
										onChange={onChangeContact}
										required='Please Enter Contact Number'
									/>
									<span>
										{' '}
										<SettingsPhoneIcon /> CONTACT
									</span>
								</div>
								<div className='inputBox'>
									<input
										type='text'
										name='email'
										value={email}
										onChange={onChangeEmail}
										required='Please Enter Email Id'
									/>
									<span>
										{' '}
										<MailOutlineIcon style={{ marginRight: '5px' }} />
										E-MAIL
									</span>
								</div>
								<div className='inputBox'>
									<input
										type='text'
										name='subject'
										value={subject}
										onChange={onChangeSubject}
										required='Please Enter Name'
									/>
									<span>
										{' '}
										<SubjectIcon /> SUBJECT
									</span>
								</div>
								<div className='inputBox'>
									<textarea
										type='text'
										name='message'
										value={message}
										onChange={onChangeMessage}
										required='Please Enter Name'
									/>
									<span>
										{' '}
										<MessageIcon /> MESSAGE
									</span>
								</div>
								<div className='inputBox'>
									<input type='submit' value='Get In Touch' onClick={sendMessage} />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
