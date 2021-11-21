import React from 'react';
import Videos from '../videos'

import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorite } from '../../redux/actions/videos';

const Favorite = () => {
	

	const dispatch = useDispatch();
  	const videos = useSelector(({ videos }) => videos.favoriteItems);
	const isLoaded = useSelector(({ videos }) => videos.isLoaded);

	React.useEffect(() => {
    	dispatch(fetchFavorite());
  	}, [isLoaded]);

	return (
		<div className="Search">
			<h1>FAVORITE:</h1>
			<Videos videos={videos} />
		</div>
	);
};
export default Favorite;