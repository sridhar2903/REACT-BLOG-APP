import axios from "axios";
import React, {createContext, useEffect, useState } from "react";

export const Tourismcontext = createContext();
export const TourismProvider=(props)=>
{
   

const [data]=useState([
   
              {
                id:"1",
                img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                titletext: "Kerala",
                maintitle: "Tourism / January 22, 2022 "
              
              
              },
              {
                id:"2",
                img: "https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" ,
                titletext: "Kodaikanal",
                maintitle:"Tourism  / January 22, 2022"
              
              
              },
              {
                id:"3",
                img: "https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" ,
                titletext: "Jammu And Kashmir",
                maintitle: "Tourism   / January 22, 2022"
              
              
              },
             {
              id:"4",
                img:"https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=",
                titletext: "Shimla",
                maintitle: "Tourism  / January 22, 2022 "
              
              
              },
             {
              id:"5",
                img: "https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" ,
                titletext:"Goa",
                maintitle: "Tourism  / January 22, 2022"
              
              
              },
              
              
              // OBJECTS RELATED TO LATEST ARTICLES IN TOURISM PAGE
              
             {
              id:"6",
                img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                title: "Kerala",
                info:"Kerala is famous especially for its ecotourism initiatives  and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world",
                moreinfo: "Tourism  / January 22, 2022 "
              
              },
               {
                id:"7",
                img: "https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg",
                title: "Kodaikanal",
                info: "Kodaikanal is known for its rich flora. Of the big trees, cypress, eucalyptus and acacia are the dominant  varieties. Pear trees are numerous and the fruits are of high quality.",
                moreinfo: "Tourism / January 22, 2022 "
              
              },
               {
                id:"8",
                img: "https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" ,
                title:"Jammu And Kashmir",
                info: "Popularly known as the Paradise on Earth, Jammu  and Kashmir is world famous for its scenic splendour, snow-capped mountains, plentiful wildlife, exquisite monuments, hospitable people and local  handicrafts.",
                moreinfo: "Tourism / January 22, 2022 "
              
              },
               {
                id:"9",
                img: "https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" ,
                title: "Shimla",
                info: "The town is famous for pleasant walking experiences on hillsides surrounded by pine and oak forests. This capital city of Himachal Pradesh is famous for The Mall, ridge, and toy train. With colonial style buildings, the town has relics of ancient past that lend it a distinct look.",
                moreinfo: "Tourism / January 22, 2022 "
              
              },
             {
              id:"10",
                img: "https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" ,
                title: "Goa",
                info: "Goa is famous for adventure water sports.",
                moreinfo: "Tourism / January 22, 2022 "
              
              }

      
      
      
      
]);

// useEffect(()=>{
//   axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/tourism").then((res)=>
//       setData(res.data)
//   )
  
//   })



  return(
    <Tourismcontext.Provider value={[data]}>
        {props.children}
    </Tourismcontext.Provider>
)
}