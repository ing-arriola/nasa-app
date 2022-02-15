import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import LibraryScreen from "./Screens/LibraryScreen/LibraryScreen";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import ApodScreen from "./Screens/Apod/ApodScreen";
import RoverScreen from "./Screens/RoverScreen/RoverScreen";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/images" element={<LibraryScreen />} />
      <Route path="/apod" element={<ApodScreen />} />
      <Route path="/rover" element={<RoverScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
