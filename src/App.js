import "./App.css";
import React from "react";

function AppComponent(props) {
  return (
    <button className="main-button">
      eaten {props.number} {props.name} {props.emoji}
    </button>
  );
}
export default AppComponent;
