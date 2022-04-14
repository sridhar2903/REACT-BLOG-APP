import React from 'react'
import Header from './Components/HeaderPart/Header'
import Home from './Components/Homepage/Home';
import Tourism from './Components/TourismPage/Tourism';
import Fitness from './Components/FitnessPage/Fitness';
import Tollywood from './Components/TollywoodPage/Tollywood';
import Technology from './Components/TechnologyPage/Technology';
import Food from './Components/FoodPage/Foodpage';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomeProvider } from './Components/Homepage/HomeContextapi';
import { TourismProvider } from './Components/TourismPage/TourismContextapi';
import { FitnessProvider } from './Components/FitnessPage/FitnessContextapi';
import { TollywoodProvider } from './Components/TollywoodPage/TollywoodContextapi';
import { TechnologyProvider } from './Components/TechnologyPage/TechnologyContextapi';
import { FoodProvider } from './Components/FoodPage/FoodContextapi';
import ArticleContextProvider from './Components/ArticlesAll/ArticleContext';
import Article from './Components/ArticlesAll/Article';

const App = () => {
  return (
    <>


      <Router>
        <HomeProvider>
          <TourismProvider>
            <FitnessProvider>
              <TollywoodProvider>
                <TechnologyProvider>
                  <TollywoodProvider>
                    <TechnologyProvider>
                      <FoodProvider>
                        <ArticleContextProvider>

                          <Header />


                          <Routes>


                            <Route path="/" element={<Navigate to='/home' />} />
                            <Route path="/home" element={<Home />} />




                            <Route path="/tourism" element={<Tourism />} />


                            <Route path="/fitness" element={<Fitness />} />


                            <Route path="/tollywood" element={<Tollywood />} />


                            <Route path="/technology" element={<Technology />} />


                            <Route path="/food" element={<Food />} />


                            <Route path="/articles/:datamap" element={<Article />} />

                          </Routes>
                        </ArticleContextProvider>
                      </FoodProvider>
                    </TechnologyProvider>
                  </TollywoodProvider>
                </TechnologyProvider>
              </TollywoodProvider>
            </FitnessProvider>
          </TourismProvider>
        </HomeProvider>
      </Router>

    </>
  )
}

export default App