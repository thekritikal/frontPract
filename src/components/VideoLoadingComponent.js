import React from 'react';


function VideoLoading(Component) {
	return function VideoLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Searching for data...
			</p>
		);
	};
};

export default VideoLoading;