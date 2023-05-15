import React from 'react';
import './Task.css';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import WindowIcon from '@mui/icons-material/Window';
import AddIcon from '@mui/icons-material/Add';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Task = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	return (
		<div style={{ minHeight: '100vh' }}>
			<div className='task-top-div'>
				<div className='task-top-right-div'>
					<button className='btn btn-primary'>
						{' '}
						<span>+</span> Add Task
					</button>
					<div class='dropdown '>
						<button
							class='btn btn-primary dropdown-toggle'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						></button>
						<ul class='dropdown-menu dropdown-menu-dark'>
							<li>
								<a class='dropdown-item' href='#'>
									Add Section
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Add Milestone
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='task-top-left-div'>
					<div class='dropdown'>
						<button
							class='btn btn-secondary'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							<CheckCircleOutlineIcon style={{ fontSize: 'medium' }} /> Incomplete
							Tasks
						</button>
						<ul class='dropdown-menu dropdown-menu-dark'>
							<li>
								<a class='dropdown-item active' href='#'>
									Inomplete Tasks
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Completed Task
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									All Tasks
								</a>
							</li>
						</ul>
					</div>
					<div class='dropdown'>
						<button
							class='btn btn-secondary'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							<SyncAltIcon style={{ fontSize: 'medium', rotate: '90deg' }} /> Sort
						</button>
						<ul class='dropdown-menu dropdown-menu-dark'>
							<li>
								<a class='dropdown-item active' href='#'>
									None
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Due Date
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Created By
								</a>
							</li>
							<li>
								<hr class='dropdown-divider' />
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Created On
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Last modified on
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Likes
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Alphabetical
								</a>
							</li>
							<li>
								<a class='dropdown-item' href='#'>
									Project
								</a>
							</li>
						</ul>
					</div>
					<div className='canvas'>
						<button
							class='btn btn-secondary'
							type='button'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasRight'
							aria-controls='offcanvasRight'
						>
							<WindowIcon /> Customize
						</button>

						<div
							style={{ top: '20%' }}
							class='offcanvas offcanvas-end'
							tabindex='-1'
							id='offcanvasRight'
							aria-labelledby='offcanvasRightLabel'
						>
							<div class='offcanvas-header'>
								<h5 class='offcanvas-title' id='offcanvasRightLabel'>
									Offcanvas right
								</h5>
								<button
									type='button'
									class='btn-close'
									data-bs-dismiss='offcanvas'
									aria-label='Close'
								></button>
							</div>
							<div class='offcanvas-body'>...</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<hr />
			</div>
			<div className='task-second-div'>
				<div class='row'>
					<div class='col-md-10'>
						<input
							class='form-control'
							type='text'
							value='Table Name'
							aria-label='readonly input example'
							readonly
						/>
					</div>
					<div class='col-md-auto'>
						<div class='dropdown '>
							<button
								class='btn btn-primary dropdown-toggle'
								type='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Projects
							</button>
							<ul class='dropdown-menu dropdown-menu-dark'>
								<li>
									<a class='dropdown-item' href='#'>
										Sort by
									</a>
								</li>
								<div>
									<hr />
								</div>
								<li>
									<a class='dropdown-item' href='#'>
										Move left
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Move Right
									</a>
								</li>
								<div>
									<hr />
								</div>
								<li>
									<a class='dropdown-item' href='#'>
										Set column width
									</a>
								</li>
								<div>
									<hr />
								</div>
								<li>
									<a class='dropdown-item' href='#'>
										Hide Column
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-auto'>
						<div>
							<Button onClick={handleOpen} style={{ backgroundColor: '#000' }}>
								<AddIcon />
							</Button>
							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby='modal-modal-title'
								aria-describedby='modal-modal-description'
							>
								<Box sx={style}>
									<Typography id='modal-modal-title' variant='h6' component='h2'>
										Add Field
									</Typography>
									<Typography id='modal-modal-description' sx={{ mt: 2 }}>
										<Box sx={{ width: '100%' }}>
											<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
												<Tabs
													value={value}
													onChange={handleChange}
													aria-label='basic tabs example'
												>
													<Tab label='Create Field' {...a11yProps(0)} />
													<Tab label='Choose From Library' {...a11yProps(1)} />
												</Tabs>
											</Box>
											<TabPanel value={value} index={0}>
											
											</TabPanel>
											<TabPanel value={value} index={1}></TabPanel>
										</Box>
									</Typography>
								</Box>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
