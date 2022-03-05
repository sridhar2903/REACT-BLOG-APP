import React from 'react'
import Header from'./Components/HeaderPart/Header'
import Home from './Components/Homepage/Home';
import Tourism from './Components/TourismPage/Tourism';
import Fitness from './Components/FitnessPage/Fitness';
import Tollywood from './Components/TollywoodPage/Tollywood';
import Technology from './Components/TechnologyPage/Technology';
import Food from './Components/FoodPage/Foodpage';
import Aerobic from './Components/Articles/Aerobic';

import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";


const App = () => {
  return (
    <>
  <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Navigate to='/home'/>  }/>
          <Route path="/home" element={<Home />} />
          <Route path="/tourism" element={<Tourism/>} />
          <Route path="/fitness" element={<Fitness/>} />
          <Route path="/tollywood" element={<Tollywood/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/food" element={<Food/>} />

          {/* ARTICLES ROUTE */}

          <Route path="/aerobic" element={<Aerobic/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App