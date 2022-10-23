import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
	const { query, handleSearch } = useGlobalContext();
	return (
		<form
			className='search-form'
			onSubmit={e => e.preventDefault()}
		>
			<h2>Search Hacker news</h2>
			<input
				type='text'
				value={query}
				className='form-input'
				onChange={e => handleSearch(e.target.value)}
				autoFocus
			/>
		</form>
	);
};

export default SearchForm;
