import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import WelcomePage from "./WelcomePage";
import Rules from "./Rules";
import StartGame from "./StartGame";
import NormalGame from "./NormalGame";
import FreePlay from "./FreePlay";
import reducers from "./reducers/reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id="header">
        <button id="home-button">
          <Link id="home-link" to={"/"}>Home</Link>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/Rules" element={<Rules />}></Route>
        <Route path="/startGame" element={<StartGame />}></Route>
        <Route path="/normalGame" element={<NormalGame />}></Route>
        <Route path="/freeplay" element={<FreePlay />}></Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
