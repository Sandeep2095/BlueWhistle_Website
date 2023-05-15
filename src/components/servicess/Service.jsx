import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Service.css';
import CreativeImage from '../../media/service/DigitalMediaServices.png';
import SocialMediaMarketing from '../../media/service/SocialMediaMarketing.png';
import DesignImage from '../../media/service/WebDesignDev.png';
import video_production from '../../media/service/video_production.png';
import SEOImage from '../../media/service/Search Engine Optimization-.png';
import SEMImage from '../../media/service/Search Engine Marketing-.png';
import ECOMMImage from '../../media/service/E- Commerce solutions.png';
import AltMedia from '../../media/service/Alternate media landscape.png';
import MarTech from '../../media/service/MarTech Innvoations.png';
import ProgrammingAdvImage from '../../media/service/Programmatic Advertising-.png';
import SequentialImage from '../../media/service/story telling.png';
import IUCMHR from '../../media/service/InfluencerAndPr.png';
import WhistleBuzz from '../../media/service/Whistlers_Buzz.png';
import MediaImage from '../../media/service/Media Buying and Planning.png';

const Service = () => {
	return (
		<div style={{ background: 'rgb(14, 50, 82)' }} className='Services'>
			<div>
				<div className='container-fluid custom-page-heading display-2'>
					Services We Provide
				</div>
			</div>

			{/* Digital Media Services */}
			<div
				style={{
					background: '#0e3252',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='coloredService-cont'>
					<div className='consulting-right-part f-center'>
						<LazyLoadImage
							alt='consulting section'
							effect='blur'
							src={CreativeImage}
							style={{ objectFit: 'contain', padding: '10px' }}
						/>
					</div>
					<div className='consulting-left-part d-flex align-items-center'>
						<div>
							<h2
								style={{ fontWeight: '600', color: '#fff', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Digital Media Services
							</h2>

							<p
								style={{
									color: '#fff',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								We think it's important to use the appropriate shades of science and art
								to colour the fast-expanding digital marketing scene. Have a marketing
								issue? We will address it with an internet marketing plan that is the
								ideal fusion of creative concepts driven by insight and selected in line
								with in-depth research. Your best interests are at the centre of the
								entire digital marketing strategy, which strives to build a customer
								base that is always aware of, involved with, and talking about your
								business.
							</p>
							<h4 style={{ marginTop: '15px', color: '#fff', fontFamily: 'Poppins' }}>
								Our comprehensive efforts in digital marketing include:
							</h4>
							<div style={{ marginTop: '20px', color: '#fff' }}>
								<li>Digital Marketing and Online Communication Strategy.</li>
								<li>Corporate Digital Brand Identity Design .</li>
								<li>Influencer outreach campaign</li>
								<li>Google Adwords Campaigns.</li>
								<li>Online Reputation Management.</li>
								<li>Online Outreach Campaigns.</li>
								<li>Search Engine Optimization.</li>
								<li>Digital PR, Marketing Audit & Analysis.</li>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Social Media Marketing */}
			<div
				data-aos='fade-up-left'
				style={{
					background: 'white',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='service-cont'>
					<div className='hr-right-part f-center'>
						<LazyLoadImage
							className='service_on_mobile'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							effect='blur'
							src={SocialMediaMarketing}
							alt='service Section'
						/>
					</div>
					<div className='hr-left-part d-flex justify-content-center align-items-end flex-column '>
						<div>
							<h2
								style={{ fontWeight: '700', color: '#212529', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Social Media Marketing
							</h2>
							<p
								style={{
									color: '#000',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								The strongest and perhaps most successful links between your brand and
								your customer base are social media platforms. We develop thorough
								social media marketing plans that engage consumers and draw attention to
								your company from the correct demographics for the right reasons. Our
								content professionals choose messages that will appeal to your audience
								and have the most possible influence on their reach, retention, and
								impact across the right channels.
							</p>
							<h4 style={{ marginTop: '15px', fontFamily: 'Poppins' }}>
								Our social media marketing services cover the following:
							</h4>
							<div style={{ marginTop: '20px', width: '' }}>
								<li>Planning a strategic campaign.</li>
								<li>The creation and upkeep of social media platforms.</li>
								<li>Campaigns for Integrated Social Media Marketing.</li>
								<li>Social Media Promotion.</li>
								<li>Digital video advertisements.</li>
								<li>Video from Vox Pop.</li>
								<li>Campaigns for social lead generation.</li>
								<li>Campaigns using Twitter Trends.</li>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Web design & Development */}
			<div
				data-aos='fade-up-right'
				style={{
					background: '#0e3252',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='coloredService-cont'>
					<div className='consulting-right-part f-center'>
						<LazyLoadImage
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							effect='blur'
							src={DesignImage}
							alt='consulting section'
						/>
					</div>
					<div className='consulting-left-part' style={{ color: '#fff' }}>
						<div>
							<h2
								style={{ fontWeight: '600', color: '#fff', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Web design & Development
							</h2>

							<p style={{ marginTop: '15px', textAlign: 'justify' }}>
								We create and construct websites that are not simply functional—they are
								fantastic! Our team of designers and developers ensures that your
								clients have the best possible user experience because your website is
								nearly always the initial point of contact with your audience. We firmly
								believe that a users-friendly interface and an appealing design may
								'bait' more clicks than a listicle!
							</p>
							<h4 style={{ marginTop: '15px', fontFamily: 'Poppins' }}>
								Here are 8 amazing things Blue Whistle Advertising performs that will
								leave you in wonder.
							</h4>
							<div style={{ marginTop: '20px' }}>
								<li>Website designing</li>
								<li>Website Development</li>
								<li>eComm Portal Development</li>
								<li>Content Management Systems (CMS)</li>
								<li>Web Maintenance & Support</li>
								<li>Micro-sites</li>
								<li>Web Applications</li>
								<li>UI Designing</li>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Video Production */}
			<div
				data-aos='fade-up-left'
				style={{
					background: 'white',
					minheight: '100vh',
				}}
				className='custom-section-container'
			>
				<div className='service-cont f-center'>
					<div className='hr-right-part'>
						<LazyLoadImage
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							effect='blur'
							src={video_production}
							alt='service Section'
						/>
					</div>
					<div className='hr-left-part d-flex justify-content-center align-items-end flex-column '>
						<div>
							<h2
								style={{ fontWeight: '700', color: '#212529', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Video Production
							</h2>
							<p
								style={{
									color: '#000',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								Our in-house production hub, the Video Production and Photography team,
								also known as Blue Production, is made up of photographers,
								videographers, producers, directors, editors, and animators who work
								together to produce excellent video content.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Search Engine Optimization */}
			<div
				data-aos='fade-up-right'
				style={{
					background: '#0e3252',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='coloredService-cont'>
					<div className='consulting-right-part'>
						<LazyLoadImage
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							effect='blur'
							src={SEOImage}
							alt='consulting section'
						/>
					</div>
					<div className='consulting-left-part text-white d-flex align-items-center d-flex align-items-center'>
						<div>
							<h2
								style={{ fontWeight: '600', color: '#fff', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Search Engine Optimization
							</h2>

							<p style={{ marginTop: '15px', textAlign: 'justify' }}>
								What's more challenging than trying to find a needle in a haystack?
								discovering a website without the best SEO tactics! Our SEO specialists
								raise your website's search engine ranking so that it receives the
								attention it deserves. If only we had an SEO plan for needles, don't you
								think?
							</p>
							<h4 style={{ marginTop: '15px', fontFamily: 'Poppins' }}>
								Among our SEO services are:
							</h4>
							<div style={{ marginTop: '20px' }}>
								<li>Page-level search engine optimization</li>
								<li>SEM approach with keyword choice.</li>
								<li>Context-based marketing</li>
								<li>Management of Google AdWords campaigns</li>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Search Engine Marketing */}
			<div
				data-aos='fade-up-left'
				style={{
					background: 'white',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				{/* <div className='hr-bg-box'></div> */}
				<div className='service-cont'>
					<div className='hr-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={SEMImage}
							alt='service Section'
						/>
					</div>
					<div className='hr-left-part d-flex justify-content-center align-items-end flex-column '>
						<div>
							<h2
								style={{ fontWeight: '700', color: '#212529', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Search Engine Marketing
							</h2>
							<p
								style={{
									color: '#000',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								Regardless of whether you're "Feeling Lucky," Google advertisements
								ensure that your message reaches the appropriate demographic. Your
								company will undoubtedly get to the top of the search results if you
								have a legitimate presence on the biggest search engines. With their
								understanding of Google AdWords, our team of specialists crafts the
								ideal approach to provide you the finest online presence.
							</p>
							<h4 style={{ marginTop: '15px', fontFamily: 'Poppins' }}>
								Our social media marketing services cover the following:
							</h4>
							<div style={{ marginTop: '20px' }}>
								<li>Google Search Campaigns</li>
								<li>Google display campaigns</li>
								<li>Google App Download Campaigns</li>
								<li>Remarketing campaigns</li>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* E- Commerce solutions */}
			<div
				data-aos='fade-up-right'
				style={{
					background: '#0e3252',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='coloredService-cont'>
					<div className='consulting-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={ECOMMImage}
							alt='consulting section'
						/>
					</div>
					<div className='consulting-left-part text-white d-flex align-items-center d-flex align-items-center'>
						<div>
							<h2
								style={{ fontWeight: '600', color: '#fff', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								E- Commerce Solutions
							</h2>

							<p style={{ marginTop: '15px', textAlign: 'justify' }}>
								20-30% of your company's income should come from online sales. Talk to
								us about finding the best distribution channels, fulfilment partners,
								and marketing strategies for your e-business if it isn't already.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/*	Alternate media landscape */}
			<div
				data-aos='fade-up-left'
				style={{
					background: 'white',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='service-cont'>
					<div className='hr-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={AltMedia}
							alt='service Section'
						/>
					</div>
					<div className='hr-left-part d-flex justify-content-center align-items-end flex-column '>
						<div>
							<h2
								style={{ fontWeight: '700', color: '#212529', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Alternate media landscape
							</h2>
							<p
								style={{
									color: '#000',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								Searching for alternatives to Facebook and Google? With the help of
								partnerships with well-known platforms, Blue Whistle Advertising is able
								to provide you quality ad inventory and a lot more viewers. You now have
								a greater range and space to market your goods and services by engaging
								with audiences on these relatively new platforms thanks to the rising
								user bases of those platforms. The big disruptor, Alternate Media
								Landscape, has made it possible for marketers to possibly reach a wider
								audience.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* MarTech Innvoations */}
			<div
				data-aos='fade-up-right'
				style={{
					background: '#0e3252',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='coloredService-cont'>
					<div className='consulting-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={MarTech}
							alt='consulting section'
						/>
					</div>
					<div className='consulting-left-part text-white d-flex align-items-center'>
						<div>
							<h2
								style={{ fontWeight: '600', color: '#fff', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								MarTech Innvoations
							</h2>

							<p style={{ marginTop: '15px', textAlign: 'justify' }}>
								Are you looking for resources and programs that employ technology to
								satisfy the needs of contemporary marketing? Introducing Marketing
								technology Innovations. This solution, which combines marketing and
								technological capabilities, offers better insights into target audiences
								and supports strategy adjustments as needed by giving rapid and
								affordable access to vast volumes of data. With a team of marketing
								technology developers on staff, we provide unique solutions to
								distinguish your brand.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Programmatic Advertising */}
			<div
				data-aos='fade-up-left'
				style={{
					background: 'white',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='service-cont'>
					<div className='hr-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={ProgrammingAdvImage}
							alt='service Section'
						/>
					</div>
					<div className='hr-left-part d-flex justify-content-center align-items-end flex-column '>
						<div>
							<h2
								style={{ fontWeight: '700', color: '#212529', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Programmatic Advertising
							</h2>
							<p
								style={{
									color: '#000',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								Consumers continually adopting new digital platforms and gadgets has
								made brand engagement much more complex. Brands must use a tailored
								strategy to hit the bullseye in order to reach audiences across the
								whole digital spectrum. In an advanced form of advertising known as
								programmatic advertising, we target specific individuals rather than
								their affinities, interests, and behaviours. Programmatic advertising
								targets the proper group of audiences with powerful messaging and
								innovative creatives, which leads to the best campaign results. Blue
								Whistle Advertising has internal resources to provide programmatic
								advertising for our customers. To design and improve advertising
								campaigns targeted at specialized populations, we develop data-driven
								digital strategies. Our brands benefit from this targeted strategy
								versus generic, one-size-fits-all advertising
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Sequential Storytelling */}
			<div
				data-aos='fade-up-right'
				style={{
					background: '#0e3252',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='coloredService-cont'>
					<div className='consulting-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={SequentialImage}
							alt='consulting section'
						/>
					</div>
					<div className='consulting-left-part text-white d-flex align-items-center'>
						<div>
							<h2
								style={{ fontWeight: '600', color: '#fff', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Sequential Storytelling
							</h2>

							<p style={{ marginTop: '15px', textAlign: 'justify' }}>
								A timeless form of mass communication will always be storytelling. The
								Sequential Storytelling format has taken on a new identity in the
								digital age. This updated version is a collection of carefully connected
								tales that take the reader on a trip through insightful and engrossing
								storytelling. With each view, interaction, or click, our cutting-edge
								retargeting systems send out the subsequent message, building a richer,
								more compelling dialogue that moves users along the sales funnel. We
								work with you to communicate your brand stories in a way that has never
								been done before.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Influencer outreach, Celebrity Management & PR */}
			<div
				data-aos='fade-up-left'
				style={{
					background: 'white',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='service-cont'>
					<div className='hr-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={IUCMHR}
							alt='service Section'
						/>
					</div>
					<div className='hr-left-part d-flex justify-content-center align-items-end flex-column '>
						<div>
							<h2
								style={{ fontWeight: '700', color: '#212529', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Influencer outreach, Celebrity Management & PR
							</h2>
							<p
								style={{
									color: '#000',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								Experts in influencer relationship management and public relations
								network with some of the biggest online advocates.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Whistle's Buzz */}
			<div
				data-aos='fade-up-right'
				style={{
					background: '#0e3252',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='coloredService-cont'>
					<div className='consulting-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={WhistleBuzz}
							alt='consulting section'
						/>
					</div>
					<div className='consulting-left-part text-white d-flex align-items-center'>
						<div>
							<h2
								style={{ fontWeight: '600', color: '#fff', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Whistle's Buzz
							</h2>

							<p style={{ marginTop: '15px', fontFamily: 'Poppins' }}>
								Catalysts that can produce turnkey solutions that have an impact are
								needed by large businesses. Small firms must concentrate on achieving
								rapid growth at minimal cost by employing a variety of hacks. A seg ment
								that provides specialist advising for both big and small enterprises is
								Whistler's Buzz.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Media Buying and Planning */}
			<div
				data-aos='fade-up-left'
				style={{
					background: 'white',
					minheight: '100vh',
					margin: 'auto',
				}}
				className='custom-section-container'
			>
				<div className='service-cont'>
					<div className='hr-right-part'>
						<LazyLoadImage
							effect='blur'
							style={{ width: '100%', objectFit: 'contain', padding: '10px' }}
							src={MediaImage}
							alt='service Section'
						/>
					</div>
					<div className='hr-left-part d-flex justify-content-center align-items-end flex-column '>
						<div>
							<h2
								style={{ fontWeight: '700', color: '#212529', fontFamily: 'Poppins' }}
								className='custom-section-heading'
							>
								Media Buying and Planning
							</h2>
							<p
								style={{
									color: '#000',
									marginTop: '15px',
									textAlign: 'justify',
								}}
							>
								The team that plans and executes online and offline media strategy is
								made up of analysts and buyers that base their decisions on the creative
								and commercial goals of brands.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
