import React from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Stats from "./Stats.js";

function App() {
  //console.log("Here's your data:", video);

  return (
    <div>
      <Header data={video} />
      <Stats data={video} />
    </div>
  );
}

export default App;
