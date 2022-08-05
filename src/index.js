import React from "react";
import ReactDOM from "react-dom/client";
//import AppComponent from "./App.js";

const rootDOM = document.getElementById("root");
const appRoot = ReactDOM.createRoot(rootDOM);

function AppComponent(props) {
  const clickedButton = (ev) => {
    ev.target.style.backgroundColor = "yellow";
    ev.target.setTimeout(AppComponent, 1000);
    <span>Clicked</span>;
  };

  return (
    <button onClick={clickedButton} className="main-button">
      eaten {props.number} {props.name} {props.emoji}
    </button>
  );
}

// const button = document.querySelector(".main-button");

// function clickedButton() {
//   button.addEventListener("click", () => {
//     button.appendChild("Clicked");
//   });
// }

appRoot.render(
  <>
    <AppComponent number="1" name="apple" emoji="🍏" />
    <AppComponent number="2" name="pineapple" emoji="🍏" />
    <AppComponent number="3" name="kiwi" emoji="🍏" />
    <AppComponent number="4" name="avokado" emoji="🍏" />
    <AppComponent number="5" name="cherry" emoji="🍏" />
    <AppComponent number="6" name="strawberry" emoji="🍏" />
  </>
);
