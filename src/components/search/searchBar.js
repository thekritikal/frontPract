import React, { useState } from 'react';

import SearchBar from 'material-ui-search-bar';

import { useHistory } from 'react-router-dom';



const Searching = (props) => {

	let history = useHistory();
	const [data, setData] = useState({ search: '' });


	const goSearch = (e) => {
		history.push({
			pathname: '/search',
			search: 'words=' + data.search + '&amount=10',
		});
		window.location.reload();
	};


	return (
		<div style={{ marginTop: 1 + '%', marginBottom: 1 + '%' }}>
			<SearchBar
				value={data.search}
				onChange={(newValue) => setData({ search: newValue })}
				onRequestSearch={() => goSearch(data.search)}
			/>
		</div>
	)
}


export default Searching;

