import React, { useState } from 'react';
import VIDEO from "./VIDEO.json";
import Container from './Youtube/Container';

const App = () => {
  let [state, setState] = useState(VIDEO);
  let [play, setPlay] = useState(state[0].videoUrl); // Corrected

  let handlePlay = (dinga) => {
    console.log(dinga);
    setPlay(dinga.videoUrl);
  };

  return (
    <div>
      <Container state={state} play={play} fun={handlePlay} />
    </div>
  );
};

export default App;
