import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../../scss/index.scss';

import App from '../Components/App';
import Welcome from '../Components/Welcome';

/*
JSX/React
TODO: ADD a winner announcement when the player has a current score of 12
TODO: ADD some basic instructions for users playing (possibly a start button too? We could render just the instructions and start button 
      and then change the state to update the whole root part)

Styling/SCSS
TODO: UPDATE styling on page and add some animations/more interesting colours
TODO: REPLACE favicon.
*/

function Main() {
  const [playing, setPlaying] = useState(false);

  const startPlaying = () => {
    setPlaying(true);
  }

  return (
    <>
      <React.StrictMode>
        {playing ? (
          <App />
        ) : (
          <Welcome startPlaying={startPlaying}/>
        )}
      </React.StrictMode>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />)