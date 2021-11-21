import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  render() {
    const { videoId } =this.props
    const opts = {
      height: '400',
      width: '720',
      playerVars: {
        autoplay: 1,
      },
    };

    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
  }
}

export default Video;