import React from "react";
import {Route, Routes} from "react-router-dom";
import AboutMe from './AboutMe';
import Events from './Events';
import ContactMe from './ContactMe';

function App() {
  return (
    <div id="root">
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactMe />} />
      </Routes>
      {/* <footer>Website Created By: JC Pleitez</footer> */}
    </div>
  );
}

export default App;
