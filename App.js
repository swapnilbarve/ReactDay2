import React, { Fragment } from 'react'
import Header from "./Components/Header";
import { Routes,Route,} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
    </Fragment>
  );
}