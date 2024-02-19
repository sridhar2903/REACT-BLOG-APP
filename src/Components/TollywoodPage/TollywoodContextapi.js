import React, {createContext, useState } from "react";
//import axios from "axios";
export const Tollywoodcontext = createContext();
export const TollywoodProvider=(props)=>
{
    
  const [data]=useState([
    
    
          
            {
              id:"1",
              img: "https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" ,
              titletext: "Radhe Shyam Movie",
              maintitle:"Tollywood / January 22, 2022 "
            
            
            },
            {
              id:"2",
              img: "https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg" ,
              titletext: "RRR Movie",
              maintitle:"Tollywood / January 22, 2022 "
            
            
            },
             {
              id:"3",
              img: "https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" ,
              titletext: "Pushpa Movie",
              maintitle: "Tollywood / January 22, 2022 "
            
            
            },
           {
            id:"4",
              img: "https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" ,
              titletext: "Bheemla Nayak Movie",
              maintitle:"Tollywood / January 22, 2022 "
            
            
            },
             {
              id:"5",
              img: "https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616",
              titletext: "Salaar Movie",
              maintitle: "Tollywood / January 22, 2022 "
            
            
            },
            
            
            // OBJECTS RELATED TO LATEST ARTICLES IN TOLLYWOOD PAGE
            
            {
              id:"6",
              img: "https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" ,
              title: "Radhe Shyam Movie",
              info: "Radhe Shyam is an upcoming Indian period romantic drama film written and directed by Radha Krishna  Kumar, starring Prabhas and Pooja Hegde.",
              moreinfo: "Tollywood / January 22, 2022 "
            
            },
             {
              id:"7",
              img: "https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg" ,
              title: "RRR Movie",
              info: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
              moreinfo: "Tollywood / January 22, 2022 "
            
            },
            {
              id:"8",
              img: "https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" ,
              title: "Pushpa Movie",
              info: "Based on the smuggling of red sander trees in Seshachalam forest, Andhra Pradesh, Pushpa tells the story of a lorry driver who is part of the illegal business.",
              moreinfo: "Tollywood / January 22, 2022 "
            
            },
            {
              id:"9",
              img: "https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" ,
              title: "Bheemla Nayak Movie",
              info: "Things change when the egos of an upright police officer and a retired army havildar clash.",
              moreinfo: "Tollywood / January 22, 2022 "
            
            },
            {
              id:"10",
              img: "https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616" ,
              title: "Salaar Movie",
              info: "Salaar is an upcoming Indian action thriller film.",
              moreinfo: "Tollywood / January 22, 2022 "
            
            }
  
  ]);

  // useEffect(()=>{
  //   axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/tollywood").then((res)=>
  //       setData(res.data)
  //   )
    
  //   })
  

  return(
    <Tollywoodcontext.Provider value={[data]}>
        {props.children}
    </Tollywoodcontext.Provider>
)
}