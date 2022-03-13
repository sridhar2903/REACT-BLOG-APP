import React from 'react'
import Header from'./Components/HeaderPart/Header'
import Home from './Components/Homepage/Home';
import Tourism from './Components/TourismPage/Tourism';
import Fitness from './Components/FitnessPage/Fitness';
import Tollywood from './Components/TollywoodPage/Tollywood';
import Technology from './Components/TechnologyPage/Technology';
import Food from './Components/FoodPage/Foodpage';
import Aerobic from './Components/Articles/Aerobic';
import Flexibility from './Components/Articles/Flexibility';
import Sprint from './Components/Articles/Sprint';
import MuscularStrength from './Components/Articles/MuscularStrength';
import Balance from './Components/Articles/Balance';
import Kerala from './Components/Articles/Kerala';
import Kodaikanal from './Components/Articles/Kodaikanal';
import JammuKashmir from './Components/Articles/JammuKashmir';
import Shimla from './Components/Articles/Shimla';
import Goa from './Components/Articles/Goa';
import RadheShyam from './Components/Articles/RadheShyam';
import Pushpa from './Components/Articles/Pushpa';
import BheemlaNayak from './Components/Articles/BheemlaNayak';
import Salaar from './Components/Articles/Salaar';
import CyberSecurity from './Components/Articles/CyberSecurity';
import ArtificialIntelligence from './Components/Articles/ArtificialIntelligence';
import BlockChainTechnology from './Components/Articles/BlockChainTechnology';
import Cryptography from './Components/Articles/Cryptography';
import Iot from './Components/Articles/Iot';
import PaneerButterMasala from './Components/Articles/PaneerButterMasala';
import RajmaMasala from './Components/Articles/RajmaMasala';
import PalakPaneer from './Components/Articles/PalakPaneer';
import MasalaDosa from './Components/Articles/MasalaDosa';
import Pongal from './Components/Articles/Pongal';
import Rrr from './Components/Articles/Rrr';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { HomeProvider } from './Components/Homepage/HomeContextapi';
import { TourismProvider } from './Components/TourismPage/TourismContextapi';
import { FitnessProvider } from './Components/FitnessPage/FitnessContextapi';
import { TollywoodProvider } from './Components/TollywoodPage/TollywoodContextapi';
import { TechnologyProvider } from './Components/TechnologyPage/TechnologyContextapi';
import { FoodProvider } from './Components/FoodPage/FoodContextapi';


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
          
          <Route path="/flexibility" element={<Flexibility/>} />
          <Route path="/sprint" element={<Sprint/>} />
          <Route path="/muscularstrength" element={< MuscularStrength/>} />
          <Route path="/balance" element={< Balance/>} />
          <Route path="/kerala" element={< Kerala/>} />
          <Route path="/kodaikanal" element={< Kodaikanal/>} />
          <Route path="/jammukashmir" element={< JammuKashmir/>} />
          <Route path="/shimla" element={< Shimla/>} />
          <Route path="/goa" element={< Goa/>} />
          <Route path="/radheshyam" element={< RadheShyam/>} />
          <Route path="/rrr" element={< Rrr/>} />
          <Route path="/pushpa" element={< Pushpa/>} />
          <Route path="/bheemlanayak" element={< BheemlaNayak/>} />
          <Route path="/salaar" element={< Salaar/>} />
          <Route path="/cybersecurity" element={< CyberSecurity/>} />
          <Route path="/artificialintelligence" element={< ArtificialIntelligence/>}/>
          <Route path="/blockchaintechnology" element={< BlockChainTechnology/>} />
          <Route path="/cryptography" element={< Cryptography/>} />
          <Route path="/iot" element={< Iot/>} />
          <Route path="/paneerbuttermasala" element={< PaneerButterMasala/>} />
          <Route path="/rajmamasala" element={< RajmaMasala/>} />
          <Route path="/palakpaneer" element={< PalakPaneer/>} />
          <Route path="/masaladosa" element={< MasalaDosa/>} />
          <Route path="/pongal" element={< Pongal/>} />
          
          </Routes>
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