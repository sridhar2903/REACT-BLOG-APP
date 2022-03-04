import React from 'react'
import Header from'./Components/HeaderPart/Header'
import Home from './Components/Homepage/Home';

import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
  <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Navigate to='/home'/>  }/>
          <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
    </>
  )
}

export default App