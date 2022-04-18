import axios from "axios";
import React, {createContext, useEffect, useState } from "react";

export const Tourismcontext = createContext();
export const TourismProvider=(props)=>
{
   

const [data,setData]=useState([]);

useEffect(()=>{
  axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/tourism").then((res)=>
      setData(res.data)
  )
  
  })



  return(
    <Tourismcontext.Provider value={[data]}>
        {props.children}
    </Tourismcontext.Provider>
)
}