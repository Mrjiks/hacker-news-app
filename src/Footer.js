import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaGithubAlt } from 'react-icons/fa';
const Footer = () => {
	return (
		<section className='section'>
			<div className='footer'>
				<div className='footer-item'>
					<h1>Company</h1>
					<p>About Us</p>
				</div>
				<div className='footer-item'>
					<h1>Support</h1>
					<p>Help Center</p>
				</div>
				<div className='footer-item'>
					<h1>Legal</h1>
					<p>Cookies Policy</p>
					<p>Privacy Policy</p>
					<p>Terms of Service</p>
				</div>
			</div>

			<div className='footer-copyright'>
				<div>
					<p>All rights reserved © Harrison E. , 2022</p>
				</div>
				<p>Designed by Jiks</p>
				<div className='socials'>
					<a
						href='https://twitter.com/iamjikson'
						className='fa-icons'
					>
						<FaTwitter />
					</a>

					<a
						href='https://github.com/Mrjiks'
						className='fa-icons'
					>
						<FaGithubAlt />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
