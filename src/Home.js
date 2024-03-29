import React from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
import Footer from './Footer';

function Home() {
	return (
		<>
			<SearchForm />
			<Buttons />
			<Stories />
			<Footer />
		</>
	);
}

export default Home;
