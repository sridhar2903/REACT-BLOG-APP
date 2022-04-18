import React, {createContext, useState,useEffect } from "react";
import axios from "axios";
export const Foodcontext = createContext();
export const FoodProvider=(props)=>
{
    
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/food").then((res)=>
        setData(res.data)
    )
    
    })


  return(
    <Foodcontext.Provider value={[data]}>
        {props.children}
    </Foodcontext.Provider>
)
}