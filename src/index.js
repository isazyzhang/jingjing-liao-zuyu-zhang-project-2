import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reducers from "./reducers/reducers";
import { Provider } from "react-redux";
import FreePlayBoard from "./FreePlayBoard";
import { createStore } from "redux";
import GameRule from "./GameRule";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/standardGameBoard" element={<Game />}></Route>
        <Route path="/freePlayGameBoard" element={<FreePlayBoard />}></Route>
        <Route path="/GameRule" element={<GameRule />}></Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
