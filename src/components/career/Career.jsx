import React, { useState, useRef } from 'react';
import './Career.css';
import career_img from '../../media/career_img.jpg';
import emailjs from '@emailjs/browser';

import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../firebaseConfig';

const Career = () => {
	const form = useRef('');

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [position, setPosition] = useState('');
	const [msg, setMsg] = useState('');
	// const [resume, setResume] = useState('');
	const [resumeFile, setResumeFile] = useState('');

	const onChangeFirstname = (e) => {
		setFirstName(e.target.value);
	};

	const onChangeLastname = (e) => {
		setLastName(e.target.value);
	};

	const onChangePhone = (e) => {
		setPhone(e.target.value);
	};
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangePosition = (e) => {
		setPosition(e.target.value);
	};

	const onChangeMsg = (e) => {
		setMsg(e.target.value);
	};

	// const onChangeResume = (e) => {
	// 	setResume(e.target.value);
	// };

	const onChangeResumeFile = (e) => {
		setResumeFile(e.target.files[0]);
		console.log(e.target.files[0]);
	};

	const sendMessage = (e) => {
		e.preventDefault();

		if (
			firstName === '' ||
			lastName === '' ||
			email === '' ||
			phone === '' ||
			position === '' ||
			msg === ''
		) {
			alert('Please Enter all the Details');
		} else {
			emailjs
				// mail goes to info@bluewhistle.com
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

					// writing logic to save the resume in the firebase storage

					const storageRef = ref(storage, `/resume/${Date.now()}${resumeFile.name}`);

					const uploadResume = uploadBytesResumable(storageRef, resumeFile);
					uploadResume.on(
						'state_changed',
						(snapshot) => {
							console.log('snapshot', snapshot);
						},
						(err) => {
							console.log(err);
						},
						() => {
							getDownloadURL(uploadResume.snapshot.ref).then((url) => {
								const applicationsRef = collection(db, 'JobApplications');
								addDoc(applicationsRef, {
									FirstName: firstName,
									LastName: lastName,
									Position: position,
									Email: email,
									Phone: phone,
									Message: msg,
									Resume: url,
									createdAt: Timestamp.now().toDate(),
								});
							});
						}
					);
				})
				.then(() => {
					alert('Form submitted successfully , We will get back to you very soon');

					setFirstName('');
					setLastName('');
					setPhone('');
					setEmail('');
					setMsg('');
					setPosition('');
					setResumeFile('');
				});
		}
	};

	return (
		<div>
			{console.log('resume', resumeFile)}
			<div className='career-form-container'>
				<form ref={form}>
					<div style={{ color: '#206da8' }}>
						<p>Fill the below form to get in touch for careers opportunities.</p>
					</div>
					{/* first name */}
					<div className='mb-3'>
						<label for='exampleInputFirstName' className='form-label'>
							First Name
						</label>
						<input
							name='firstName'
							type='text'
							className='form-control custom-input'
							id='exampleInputFirstName'
							value={firstName}
							onChange={onChangeFirstname}
						/>
						{/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
					</div>
					{/* last name */}
					<div className='mb-3'>
						<label for='exampleInputLastName' className='form-label'>
							Last Name
						</label>
						<input
							name='lastName'
							type='text'
							className='form-control custom-input'
							id='exampleInputLastName'
							value={lastName}
							onChange={onChangeLastname}
						/>
					</div>
					{/* email id */}
					<div className='mb-3'>
						<label for='exampleInputEmail' className='form-label'>
							Email
						</label>
						<input
							name='email'
							type='email'
							className='form-control custom-input'
							id='exampleInputEmail'
							value={email}
							onChange={onChangeEmail}
						/>
					</div>
					{/* phone number */}
					<div className='mb-3'>
						<label for='exampleInputPhone' className='form-label'>
							Phone
						</label>
						<input
							name='phone'
							type='number'
							className='form-control custom-input'
							id='exampleInputPhone'
							value={phone}
							onChange={onChangePhone}
						/>
					</div>
					{/* position applying for */}
					<div className='mb-3'>
						<label for='exampleInputPosition' className='form-label'>
							Position Applying For
						</label>
						<select
							name='position'
							className='form-select custom-input'
							aria-label='Default select example'
							value={position}
							onChange={onChangePosition}
						>
							<option>Please Select</option>
							<option value='Graphic Designer'>Graphic Designer</option>
							<option value='Copywriter'>Copywriter</option>
							<option value='Video Editor'>Video Editor</option>
							<option value='Digital Marketing Executive'>
								Digital Marketing Executive
							</option>
							<option value='Web Developer'>Web Developer</option>
							<option value='Business Development Executive'>
								Business Development Executive
							</option>
							<option value='Account Executive'>Account Executive</option>

							<option value='Copywriter Lead'>Copywriter Lead</option>
							<option value='Art Director'>Art Director</option>
							<option value='Digital Marketing Lead'>Digital Marketing Lead</option>
							<option value='Team Leader'>Team Leader</option>
							<option value='Senior Manager'>Senior Manager</option>
							<option value='HR'>HR</option>
							<option value='HR Assistant'>HR Assistant</option>
							<option value='Intern (Copy , Art . Digital and Sales)'>
								Intern (Copy , Art . Digital and Sales)
							</option>
							<option value='Accountant'>Accountant</option>
						</select>
					</div>
					{/* message */}
					<div class='mb-3'>
						<label for='exampleFormControlMessage' class='form-label'>
							Message
						</label>
						<textarea
							name='msg'
							className='form-control custom-input'
							id='exampleFormControlMessage'
							rows='5'
							value={msg}
							onChange={onChangeMsg}
						></textarea>
					</div>
					{/* resume link */}
					{/* <div className="mb-3">
            <label for="exampleInputResume" className="form-label">
              Resume Link
            </label>
            <input
              name="resume"
              type="text"
              className="form-control custom-input"
              id="exampleInputResume"
              value={resume}
              onChange={onChangeResume}
            />
            <div className="form-text">
              Please share the resume link after uploading to google drive and
              make sure to provide the view access
            </div>
          </div> */}

					{/* resume file upload field */}
					<div className='mb-3'>
						<label for='exampleInputResumeFile' className='form-label'>
							Upload Resume
						</label>
						<input
							name='resumeFile'
							type='file'
							className='form-control custom-input'
							id='exampleInputResumeFile'
							// value={resumeFile}
							onChange={onChangeResumeFile}
						/>
					</div>

					{/* submit button */}
					<button
						style={{ backgroundColor: 'black' }}
						type='submit'
						className='btn btn-primary'
						onClick={sendMessage}
					>
						Send Application
					</button>
					<div className='form-text'>
						<br />
						<br />
						Don't see something for you?
						<br />
						<br /> We're always looking for smart, talented people. Send us your
						resume at <strong>operations@bluewhistle.co.in</strong> or{' '}
						<strong>info@bluewhistle.co.in</strong> and we'll get in touch if
						something comes up.
					</div>
				</form>
				<div className='career-img-container'>
					<img src={career_img} alt='career' />
				</div>
			</div>
		</div>
	);
};

export default Career;
