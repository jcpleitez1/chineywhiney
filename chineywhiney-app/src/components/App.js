import React from "react";
import {Route, Routes} from "react-router-dom";
import AboutMe from './AboutMe';
import Events from './Events';
import Posts from './Posts';

function App() {
  return (
    <div id="root">
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/events" element={<Events />} />
          <Route path="/posts" element={<Posts />} />
      </Routes>
      {/* <footer>Website Created By: JC Pleitez</footer> */}
    </div>
  );
}

export default App;
