import React from "react";
import Path from "./components/Path";
import "./App.css";

const App = () => {
  return (
    <div className="ludo-board">
      {/* Houses */}
      <div className="house green-house">
        <div className="box">
          {[...Array(4)].map((_, i) => <div key={i} className="token green-token"></div>)}
        </div>
      </div>
      <div className="house yellow-house">
        <div className="box">
          {[...Array(4)].map((_, i) => <div key={i} className="token yellow-token"></div>)}
        </div>
      </div>
      <div className="house red-house">
        <div className="box">
          {[...Array(4)].map((_, i) => <div key={i} className="token red-token"></div>)}
        </div>
      </div>
      <div className="house blue-house">
        <div className="box">
          {[...Array(4)].map((_, i) => <div key={i} className="token blue-token"></div>)}
        </div>
      </div>

      {/* Paths */}
      <Path orientation="vertical"   color="yellow" gridArea="1 / 7 / 7 / 10" />
      <Path orientation="vertical"   color="red"    gridArea="10 / 7 / 16 / 10" />
      <Path orientation="horizontal" color="green"  gridArea="7 / 1 / 10 / 7" />
      <Path orientation="horizontal" color="blue"   gridArea="7 / 10 / 10 / 16" />

      {/* Center */}
      <div className="home-center">🎲</div>
    </div>
  );
};

export default App;