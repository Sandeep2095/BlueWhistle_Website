import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import emailjs from '@emailjs/browser';

const EnquiryModal = () => {
	const style = {
		outline: 'none',
		position: 'absolute',
		top: '40%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 360,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		borderRadius: '10px',
		boxShadow: 24,
		p: 0,
		mt: 5,
	};

	const buttonStyle = {
		position: 'absolute',
		right: '-45px',
		top: '45%',
		rotate: '90deg',
		fontSize: '1rem',
		padding: '.5rem',
		background: '#0e3252',
		color: 'white',
		zIndex: 99,
		cursor: 'pointer',
		border: ' 1px solid white',
		Animation: 'animate__animated animate__bounceInRight',
	};

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const form = useRef();

	const [fname, setFname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [city, setCity] = useState('');
	const [service, setService] = useState('');

	const onChangeFname = (e) => {
		setFname(e.target.value);
	};

	const onChangePhone = (e) => {
		setPhone(e.target.value);
	};
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangeService = (e) => {
		setService(e.target.value);
		console.log('value***', e.target.value);
		console.log('state service', service);
	};

	const onChangeCity = (e) => {
		setCity(e.target.value);
	};

	const submitEnquiry = (e) => {
		e.preventDefault();

		if (
			fname === '' ||
			phone === '' ||
			email === '' ||
			city === '' ||
			service === ''
		) {
			alert('Please Enter all the Details');
		} else {
			emailjs
				// mail goes to business@bluewhistle.com
				.sendForm(
					'service_yo42v3k',
					'template_57lt4ib',
					form.current,
					'-o37wLkz924WA2Apn'
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
					alert('Form submitted successfully , We will get back to you very soon');

					setFname('');
					setPhone('');
					setEmail('');
					setCity('');
					setService('');
				});
		}
	};

	return (
		<div>
			<Button style={buttonStyle} onClick={handleOpen}>
				Enquiry Now
			</Button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style} className='enquiry_modal'>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						<button
							onClick={() => handleClose()}
							style={{
								position: 'absolute',
								right: '10px',
								top: '15px',
								backgroundColor: 'white',
							}}
							type='button'
							class='btn-close fs-6'
						></button>
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<h2
							style={{
								textAlign: 'left',
								margin: '0 1.6rem',
								color: '#000',
								fontWeight: 'bold',
							}}
						>
							Business Enquiry
						</h2>
						<p className='mx-4'>
							One of our executives will contact you as soon as you complete the form
							below.
						</p>
						<div className='modal-dialog' style={{ marginTop: '15px' }}>
							<div className='modal-content' style={{ border: 'none' }}>
								<div className='modal-body'>
									<form ref={form}>
										<div className='row'>
											<div class='col-md-12'>
												<input
													type='text'
													class='form-control'
													placeholder='Full Name'
													aria-label='First name'
													name='fname'
													value={fname}
													onChange={onChangeFname}
												/>
											</div>

											<div class='col-md-12 mt-3'>
												<input
													type=''
													class='form-control'
													placeholder='Phone Number'
													aria-label='Phone Number'
													name='phone'
													value={phone}
													onChange={onChangePhone}
												/>
											</div>

											<div class='col-md-12 mt-3'>
												<input
													type=''
													class='form-control'
													placeholder='Email'
													aria-label='Email'
													name='email'
													value={email}
													onChange={onChangeEmail}
												/>
											</div>

											<div class='col-md-12 mt-3'>
												<input
													type=''
													class='form-control'
													placeholder='Enter your City'
													aria-label='City'
													name='city'
													value={city}
													onChange={onChangeCity}
												/>
											</div>

											<div className='col-md-12 mt-3'>
												{/* this input is basically to provide the subject value in the emaijs mails and it will be always hidden */}
												<input
													style={{ display: 'none' }}
													type='text'
													name='subject'
													value='ADMISSION ENQUIRY'
													className='form-control'
												/>
												{/* ------------------ */}
												<select
													class='form-control'
													id='addService'
													name='service'
													value={service}
													onChange={onChangeService}
												>
													<option> - Select Service - </option>
													<option value='Digital Media Services'>
														Digital Media Services
													</option>
													<option>Social Media Marketing</option>
													<option>Web design & Development</option>
													<option>Video Production</option>
													<option>Search Engine Optimization</option>
													<option>Search Engine Marketing</option>
													<option>E- Commerce Solutions</option>
													<option>Alternate media landscape</option>
													<option>MarTech Innvoations</option>
													<option>Programmatic Advertising</option>
													<option>Sequential Storytelling</option>
													<option>Influencer outreach, Celebrity Management & PR</option>
													<option>Whistle's Buzz</option>
													<option>Media Buying and Planning</option>
												</select>
											</div>
											<div className='mt-3'>
												<button
													style={{ backgroundColor: '#0e3252', border: '1px solid black' }}
													type='submit'
													id='btnSuscribe'
													class='btn btn-primary submit-pop'
													onClick={submitEnquiry}
												>
													ENQUIRY NOW
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default EnquiryModal;
