import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
			<Routes>
				<Route
					path='/about'
					element={<About />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
