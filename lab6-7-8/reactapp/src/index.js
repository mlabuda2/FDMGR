import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListOfCGames from "./components/ListOfCGames";

function Message() {
  return (
    <div>
      <ListOfCGames />
    </div>
  );
}
function tick() {
  ReactDOM.render(<Message />, document.getElementById("root"));
}
setInterval(tick, 2000);