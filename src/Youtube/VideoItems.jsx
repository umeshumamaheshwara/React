import React from 'react';

const VideoItems = (props) => {
  let { thumbnailUrl, title } = props.data;

  return (
    <div>
      <div onClick={() => props.fun(props.data)}>
        <img height={200} width={200} src={thumbnailUrl} alt="" />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default VideoItems;
