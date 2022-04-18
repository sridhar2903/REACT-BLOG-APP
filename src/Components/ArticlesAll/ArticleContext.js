import React, { createContext, useState ,useEffect } from "react";
import axios from "axios";
export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {

    const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/articles").then((res)=>
        setData(res.data)
    )
    
    })
  
    

    return (
        <>
            <ArticleContext.Provider value={[data]}>
                {props.children}
            </ArticleContext.Provider>
        </>
    )

}

export default ArticleContextProvider