import React from 'react';
import './AdminActionBtn.css';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const AdminActionBtn = () => {
	const actions = [
		{
			icon: <FileCopyIcon />,
			name: 'My Profile',
			link: '/admin/MyProfile',
		},
		{
			icon: <PrintIcon />,
			name: 'Register Employee',
			link: '/admin/signup',
		},
		{
			icon: <ShareIcon />,
			name: 'Users',
			link: '/admin/users',
		},
	];

	return (
		<div>
			<Box
				sx={{
					height: '60px',
					width: '60px',
					position: 'fixed',
					bottom: '2rem',
					left: '2rem',
					transform: 'translateZ(0px)',
					flexGrow: 1,
				}}
			>
				<SpeedDial
					ariaLabel='SpeedDial basic example'
					sx={{ position: 'absolute', bottom: 16, right: 16 }}
					icon={<SpeedDialIcon />}
				>
					{actions.map((action) => (
						<Link to={action.link}>
							<SpeedDialAction
								key={action.name}
								icon={action.icon}
								tooltipTitle={action.name}
							/>
						</Link>
					))}
				</SpeedDial>
			</Box>
		</div>
	);
};

export default AdminActionBtn;
