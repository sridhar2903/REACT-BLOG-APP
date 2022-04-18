import React, {createContext, useState,useEffect } from "react";
import axios from "axios";
export const Technologycontext = createContext();
export const TechnologyProvider=(props)=>
{
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/technology").then((res)=>
        setData(res.data)
    )
    
    })
  


  return(
    <Technologycontext.Provider value={[ data]}>
        {props.children}
    </Technologycontext.Provider>
)
}