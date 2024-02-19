import React, {createContext, useState,} from "react";
//import axios from "axios";
export const Technologycontext = createContext();
export const TechnologyProvider=(props)=>
{
  const [data]=useState([
   
           {
             id:"1",
             img:"https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" ,
             titletext: "Cyber Security",
             maintitle: "Technology / January 22, 2022 "
           
           
           },
           {
             id:"2",
             img: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg" ,
             titletext: "Artificial Intelligence",
             maintitle: "Technology / January 22, 2022 "
           
           
           },
          {
           id:"3",
             img: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" ,
             titletext: "Block Chain Technology",
             maintitle: "Technology / January 22, 2022 "
           
           
           },
            {
             id:"4",
             img:"https://t3.ftcdn.net/jpg/02/09/68/68/360_F_209686850_fOILzBM1slwrmajGXvQQN1QyAbGxl2VH.jpg",
             titletext:" Cryptography",
             maintitle: "Technology / January 22, 2022 "
         
           
           
           },
           {
             id:"5",
             img: "https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960",
             titletext: "Internet Of Things",
             maintitle: "Technology / January 22, 2022 "
         
           
           
           },
           
           
           // OBJECTS RELATED TO LATEST ARTICLES IN TECHNOLOGY PAGE
           
           {
             id:"6",
             img: "https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" ,
             title: "Cyber Security",
             info:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
             moreinfo: "Technology / January 22, 2022 "
           
           },
            {
             id:"7",
             img: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg",
             title:"Artificial Intelligence",
             info: "Artificial intelligence (AI) is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment.",
             moreinfo: "Technology/ January 22, 2022 "
           
           },
           {
             id:"8",
             img: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" ,
             title: "Block Chain Technology",
             info: "Blockchain technology is most simply defined as a decentralized, distributed ledger that records the provenance of a digital asset.",
             moreinfo: "Technology/ January 22, 2022 "
           
           },
           {
             id:"9",
             img:"https://t3.ftcdn.net/jpg/02/09/68/68/360_F_209686850_fOILzBM1slwrmajGXvQQN1QyAbGxl2VH.jpg",
             title: "Cryptography",
             info: "Cryptography is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents.",
             moreinfo: "Technology / January 22, 2022"
           
           },
           {
             id:"10",
             img:"https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960" ,
             title: "Internet Of Things",
             info: "The internet of things, or IoT. ",
             moreinfo: "Technology/ January 22, 2022 "
           
           }
     
          ]);

  // useEffect(()=>{
  //   axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/technology").then((res)=>
  //       setData(res.data)
  //   )
    
  //   })
  


  return(
    <Technologycontext.Provider value={[ data]}>
        {props.children}
    </Technologycontext.Provider>
)
}