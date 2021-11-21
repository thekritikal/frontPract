import React from 'react';
import Videos from './videos'

import './searchStyle.css';

import { useSelector, useDispatch } from 'react-redux';
import { searchVideo } from '../../redux/actions/videos';


const Search = () => {
	

	const dispatch = useDispatch();
  	const videos = useSelector(({ videos }) => videos.searchItems);
	const isLoaded = useSelector(({ videos }) => videos.isLoaded);

	React.useEffect(() => {
    	dispatch(searchVideo(window.location.search));
  	}, [isLoaded]);

	return (
		<div className="Search">
			<h1>RESULT:</h1>
			<Videos videos={videos} />
		</div>
	);
};
export default Search;