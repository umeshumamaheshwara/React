import React from 'react';

const VideoPlayer = ({ play }) => {
  return (
    <div>
      <video height={200} width={300} controls autoPlay muted loop src={play}></video>
    </div>
  );
};

export default VideoPlayer;
