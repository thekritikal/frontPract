import React from 'react';

import Videos from './components/videos';
import VideoLoadingComponent from './components/VideoLoadingComponent';

import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchVideos } from './redux/actions/videos';



function App() {

	const VideoLoading = VideoLoadingComponent(Videos);

	const dispatch = useDispatch();
	const videos = useSelector(({ videos }) => videos.items);
	const isLoaded = useSelector(({ videos }) => videos.isLoaded);

	React.useEffect(() => {
		dispatch(fetchVideos());
	}, []);

	return (
		<div className="App">
			<h1>LAST ADDED:</h1>
			<VideoLoading isLoading={!isLoaded} videos={videos} />
		</div>
	);
};

export default App;
