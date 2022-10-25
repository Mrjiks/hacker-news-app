import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { BsSunFill, BsSun } from 'react-icons/bs';

//persisting theme
const getStorageTheme = () => {
	let theme = 'light-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	return theme;
};

function Navbar() {
	const [theme, setTheme] = useState(getStorageTheme());

	const toggleTheme = () => {
		setTheme(`${theme === 'light-theme' ? 'dark-theme' : 'light-theme'}`);
	};

	useEffect(() => {
		//attaches css class to html element
		document.documentElement.className = theme;

		//Makes sure user selected theme is persisted
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<nav className='nav-center'>
			<div className='logo nav-links'>
				<h1>Hnews</h1>
			</div>
			<div>
				<ul className='nav-links'>
					<Link
						to='/'
						className='link'
					>
						Home
					</Link>
					<Link
						to='/about'
						className='link'
					>
						About
					</Link>
				</ul>
			</div>
			<div className='btn-theme'>
				<button
					className='btn'
					onClick={toggleTheme}
				>
					{theme === 'light-theme' ? 'Dark Mode' : 'Light Mode'}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
