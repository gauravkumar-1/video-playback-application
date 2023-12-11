// App.js

import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>YouTube Video Player</h1>
      </header>
      <main>
        <VideoPlayer videoId="v=pc-0TcvtZpE" apiKey="AIzaSyBoxr6zt3Q3xhe_GhxQwQkyxeuARA33dgo" />
      </main>
      <footer>
        <p>video player using React and YouTube Data API v3</p>
      </footer>
    </div>
  );
};

export default App;
