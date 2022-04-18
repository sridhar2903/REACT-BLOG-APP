import React, {createContext, useState } from "react";


export const Homecontext = createContext();

export const HomeProvider=(props)=>
{
    // OBJECTS RELATED TO LATEST IN HOME PAGE

    const [homedata]=useState(
      [
         {
           id:"1",
          image:"https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=",
          title: "Aerobic",
          info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
          subinfo: "Fitness  / January 22, 2022 "
        },
        
        {
          id:"2",
          image:"https://images.indianexpress.com/2021/12/RRR-trailer-launch-live-blog-1200.jpg?w=389" ,
          title: "RRR Movie",
          info: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
          subinfo: "Tollywood  / March 25, 2022 "
        },
        
        {
          id:"3",
          image: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
          title: "Paneer Butter Masala",
          info: "Paneer Butter Masala is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.",
          subinfo:"Food  / January 10, 2022 "
        },
        
        // OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE
        
        {
          id:"4",
          img:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          titletext: "Kerala : God's Own Country",
          maintitle: "Tourism  / January 22, 2022 "
        
        
        },
        
        {
          id:"5",
          img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=",
          titletext: "Aerobic",
          maintitle:"Fitness  / January 22, 2022 "
        
        
        },

         {
          id:"6",
          img: "https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" ,
          titletext:"Radhe Shyam Movie",
          maintitle: "Tollywood   / January 22, 2022 "
        
        
        },

         {
          id:"7",
          img: "https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg",
          titletext: "Cyber Security",
          maintitle:"Technology  / January 22, 2022 "
        
        
        },
        {
          id:"8",
          img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" ,
          titletext: "Paneer Butter Masala",
          maintitle: "Food  / January 22, 2022"
        
        
        },
        
        
        // OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE
        
         {
          id:"9",
          img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          title: "Kerala : God's Own Country",
          info:  "Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography,have made Kerala one of the most popular tourist destinations in the world",
          moreinfo: "Tourism  / January 22, 2022 "
        
        },
        {
          id:"10",
          img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" ,
          title: "Aerobic",
          info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
          moreinfo: "Fitness / January 22, 2022 "
        
        },
        {
          id:"11",
          img: "https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214",
          title: "Radhe Shyam Movie",
          info: "Radhe Shyam is an upcoming Indian period romantic drama film written and directed by Radha Krishna  Kumar, starring Prabhas and Pooja Hegde.",
          moreinfo: "Tollywood / January 22, 2022 "
        
        },
        {
          id:"12",
          img: "https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg",
          title: "Cyber Security",
          info: "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
          moreinfo: "Technology / January 22, 2022 "
        
        },
        
        {
          id:"13",
          img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
          title:"Paneer Butter Masala",
          info: "Paneer butter masala, also known as butter paneer. ",
          moreinfo: "Food / January 22, 2022 "
        
        }
      
      ]
    )
    




  return(
      <Homecontext.Provider value={[homedata]}>
          {props.children}
      </Homecontext.Provider>
  )
  
}
