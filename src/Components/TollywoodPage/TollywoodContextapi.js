import React, {createContext, useState ,useEffect} from "react";
import axios from "axios";
export const Tollywoodcontext = createContext();
export const TollywoodProvider=(props)=>
{
    
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/tollywood").then((res)=>
        setData(res.data)
    )
    
    })
  

  return(
    <Tollywoodcontext.Provider value={[data]}>
        {props.children}
    </Tollywoodcontext.Provider>
)
}