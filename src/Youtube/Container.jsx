import React from 'react';
import VideoItems from './VideoItems';
import VideoPlayer from './VideoPlayer'; // Added import

const Container = ({ state, play, fun }) => {
  return (
    <div>
      <article style={{ display: 'flex' }}>
        <aside>
          <VideoPlayer play={play} />
        </aside>

        {/* Video List */}
        <aside>
          {state.map((max) => (
            <VideoItems fun={fun} data={max} key={max.id} /> // Corrected map
          ))}
        </aside>
      </article>
    </div>
  );
};

export default Container;
