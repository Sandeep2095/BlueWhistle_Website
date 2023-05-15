import React from 'react';
import './Navbar.css';
import logo from '../../media/logo.png';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	// const location = useLocation();
	// const isAdminRoute = location.pathname.includes('admin');

	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light custom-nav'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler custom-toggler-border'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo01'
						aria-controls='navbarTogglerDemo01'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span style={{ backgroundImage: 'none' }} className='navbar-toggler-icon'>
							<IoMenu
								style={{ width: '100%', height: '100%' }}
								className='burger-menu-custom'
							></IoMenu>
						</span>
					</button>
					<div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
						<Link
							onClick={() => navigate('/')}
							to='/'
							className='navbar-brand logo-link hide-on-large'
							data-bs-toggle='collapse'
							data-bs-target='#navbarTogglerDemo01'
						>
							<img className='logo' src={logo} alt='logo' />
						</Link>
						{/* home-link on click of logo for large screen to prevent navbar collapse */}
						<Link
							onClick={() => navigate('/')}
							to='/'
							className='navbar-brand logo-link show-on-large'
						>
							<img className='logo' src={logo} alt='logo' />
						</Link>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
						<ul className='navbar-nav mr-auto mb-2 mb-lg-0 nav-links-container'>
							{/* Home */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/')}
									to='/'
									className='nav-link hide-on-large'
									aria-current='page'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									Home
								</Link>
								{/* nav-link for large screen to prevent navbar collapse */}
								<Link
									onClick={() => navigate('/')}
									to='/'
									className='nav-link show-on-large'
									aria-current='page'
								>
									Home
								</Link>
							</li>

							<span className='border-right'></span>

							{/* About */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/about')}
									to='/about'
									className='nav-link hide-on-large'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									About
								</Link>
								{/* nav-link for large screen to prevent navbar collapse */}
								<Link
									onClick={() => navigate('/about')}
									to='/about'
									className='nav-link show-on-large'
								>
									About
								</Link>
							</li>

							<span className='border-right'></span>

							{/* Servies */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/service')}
									to='/service'
									className='nav-link hide-on-large'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									Services
								</Link>
								{/* nav-link for large screen to prevent navbar collapse */}
								<Link
									onClick={() => navigate('/service')}
									to='/service'
									className='nav-link show-on-large'
								>
									Services
								</Link>
							</li>

							<span className='border-right'></span>

							{/* PortFolio */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/portfolio')}
									to='/portfolio'
									className='nav-link hide-on-large'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									Portfolio
								</Link>
								{/* nav-link for large screen to prevent navbar collapse */}
								<Link
									onClick={() => navigate('/portfolio')}
									to='/portfolio'
									className='nav-link show-on-large'
								>
									Portfolio
								</Link>
							</li>

							<span className='border-right'></span>

							{/* Team */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/team')}
									to='/team'
									className='nav-link hide-on-large'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									Team
								</Link>
								{/* large screen no collapse */}
								<Link
									onClick={() => navigate('/team')}
									to='/team'
									className='nav-link show-on-large'
								>
									Team
								</Link>
							</li>

							<span className='border-right'></span>

							{/* Clients */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/clients')}
									to='/clients'
									className='nav-link hide-on-large'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									Clients
								</Link>
								{/* large screen no collapse */}
								<Link
									onClick={() => navigate('/clients')}
									to='/clients'
									className='nav-link show-on-large'
								>
									Clients
								</Link>
							</li>
							{/* <span className="border-right"></span>
              <li className="nav-item hover-underline">
                <Link
                  to="/"
                  className="nav-link hide-on-large"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                >
                  Blogs
                </Link>
                <Link to="/" className="nav-link show-on-large">
                  Blogs
                </Link>
              </li> */}
							<span className='border-right'></span>

							{/* Careers */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/careers')}
									to='/careers'
									className='nav-link hide-on-large'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									Careers
								</Link>
								{/* large screen no collapse */}
								<Link
									onClick={() => navigate('/careers')}
									to='/careers'
									className='nav-link show-on-large'
								>
									Careers
								</Link>
							</li>

							<span className='border-right'></span>

							{/* Contact */}
							<li className='nav-item hover-underline'>
								<Link
									onClick={() => navigate('/contactus')}
									to='/contactus'
									className='nav-link hide-on-large'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo01'
								>
									Contact
								</Link>
								{/* large screen no collapse */}
								<Link
									onClick={() => navigate('/contactus')}
									to='/contactus'
									className='nav-link show-on-large'
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
