import React, {createContext, useState } from "react";
export const Technologycontext = createContext();
export const TechnologyProvider=(props)=>
{
    
// OBJECTS RELATED TO TOP POST DETAILS IN TECHNOLOGY PAGE

const [technologydata] =useState(
 [
  {
    id:"1",
    img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Cyber Security</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  },
  {
    id:"2",
    img: <img src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Artificial Intelligence</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  },
 {
  id:"3",
    img: <img src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Block Chain Technology</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  },
   {
    id:"4",
    img: <img src="https://i.ytimg.com/vi/cqgtdkURzTE/maxresdefault.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Cryptography</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  },
  {
    id:"5",
    img: <img src="https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960" id='imgpost' alt='notfound' />,
    titletext: <b>Internet Of Things</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  },
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN TECHNOLOGY PAGE
  
  {
    id:"6",
    img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imglatest' alt='notfound' />,
    title: <b>Cyber Security</b>,
    info: <p>Cyber security is the application of technologies,<br/> processes and controls to protect systems, networks,<br/> programs, devices and data from cyber attacks.<br/> It aims to reduce the risk of cyber attacks and <br/> protect against the unauthorised exploitation <br/>of systems, networks and technologies.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  },
   {
    id:"7",
    img: <img src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg" id='imglatest' alt='notfound' />,
    title: <b>Artificial Intelligence</b>,
    info: <p>Artificial intelligence (AI) is the ability of a computer<br/> or a robot controlled by a computer to do tasks<br/> that are usually done by humans because <br/>they require human intelligence and discernment.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  },
  {
    id:"8",
    img: <img src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" id='imglatest' alt='notfound' />,
    title: <b>Block Chain Technology</b>,
    info: <p>Blockchain technology is most simply defined as <br/>a decentralized, distributed ledger that records<br/> the provenance of a digital asset.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  },
  {
    id:"9",
    img: <img src="https://i.ytimg.com/vi/cqgtdkURzTE/maxresdefault.jpg" id='imglatest' alt='notfound' />,
    title: <b>Cryptography</b>,
    info: <p>Cryptography is the study of secure communications <br/>techniques that allow only the sender and intended <br/>recipient of a message to view its contents.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  },
  {
    id:"10",
    img: <img src="https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960" id='imglatest' alt='notfound' />,
    title: <b>Internet Of Things</b>,
    info: <p>The internet of things, or IoT, is a system of interrelated <br/>computing devices, mechanical and digital machines,<br/> objects, animals or people that are provided with<br/> unique identifiers (UIDs). </p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  }
]
)
  return(
    <Technologycontext.Provider value={[ technologydata]}>
        {props.children}
    </Technologycontext.Provider>
)
}