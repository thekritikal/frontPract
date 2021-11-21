import Video from './video'
import { useParams } from 'react-router-dom';
import './detailVideo.css'
import React from 'react';

import Button from '@material-ui/core/Button';
import { FaHeartBroken } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { GrChannel } from 'react-icons/gr';

import { useSelector, useDispatch } from 'react-redux';
import { setLiked, setDisliked } from '../../redux/actions/videos';
import { fetchDetail } from '../../redux/actions/videos';


function DetailVideo() {

	const { videoId } = useParams();
    const video = useSelector(({ videos }) => videos.detailVideo);
	const isLoaded = useSelector(({ videos }) => videos.isLoaded);
	const dispatch = useDispatch();

	let setDislike = id => {
		dispatch(setDisliked(id))
	}

	let setLike = id => {
		dispatch(setLiked(id));
	}
	React.useEffect(() => {
    	dispatch(fetchDetail(videoId));
  	}, [isLoaded]);

	return (
		<div className="DetailVideo">
			<Video videoId={videoId} className="video"/>
            <div className="information__container">
                <h1>{video.title}</h1>
                <div className="sub__container">
                    <div className="channelTitle"><GrChannel style={{marginRight: 10 + 'px'}} />{video.channelTitle}</div>
                
					{!video.isFavorite ?
					<Button variant="outlined" color="secondary" onClick={e => setLike(video.id)}>
						<FaHeart /> <div style={{marginLeft: 10 + 'px'}}>Add to Favorite</div>
					</Button>:
					<Button variant="outlined" onClick={e => setDislike(video.id)}>
						<FaHeartBroken /> <div style={{marginLeft: 10 + 'px'}}>Dislike</div>
					</Button>}	
				</div>
                <div className="description__container">
                    DESCRIPTION:
                    <div className="description">{video.description}</div>
                </div>
            </div>
		</div>
	);
};


export default DetailVideo;
