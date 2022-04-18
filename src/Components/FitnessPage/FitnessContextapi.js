import React, {createContext, useState ,useEffect } from "react";
import axios from "axios";
export const Fitnesscontext = createContext();
export const FitnessProvider=(props)=>
{
    
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/fitness").then((res)=>
        setData(res.data)
    )
    
    })
  


  return(
    <Fitnesscontext.Provider value={[data]}>
        {props.children}
    </Fitnesscontext.Provider>
)
}