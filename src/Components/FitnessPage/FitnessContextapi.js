import React, {createContext, useState ,} from "react";
//import axios from "axios";
export const Fitnesscontext = createContext();
export const FitnessProvider=(props)=>
{
    
  const [data]=useState([

            {
              id:"1",
              img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" ,
              titletext: "Aerobic",
              maintitle: "Fitness  / January 22, 2022"
            
            
            },
             {
              id:"2",
              img: "https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" ,
              titletext: "Flexibility",
              maintitle: "Fitness / January 22, 2022 "
            
            
            },
           {
            id:"3",
            img:"https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              titletext: "Sprint",
              maintitle: "Fitness / January 22, 2022 "
            
            
            },
           {
            id:"4",
              img: "https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" ,
              titletext: "Muscular Strength",
              maintitle: "Fitness / January 22,  2022 "
            
            
            },
            {
              id:"5",
              img: "https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg",
              titletext: "Balance",
              maintitle: "Fitness / January 22, 2022 "
            
            
            },
            
            
            // OBJECTS RELATED TO LATEST ARTICLES IN FITNESS PAGE
            
          {
            id:"6",
              img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=",
              title: "Aerobic",
              info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
              moreinfo: "Fitness / January 22, 2022 "
            
            },
           {
            id:"7",
              img:"https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" ,
              title: "Flexibility",
              info: "A flexibility exercise is a movement or position designed to stretch specific muscles, with the goal of increasing flexibility and range of motion in that specific area. ",
              moreinfo: "Fitness / January 22, 2022 "
            
            },
           {
            id:"8",
            img:"https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              title: "Sprint",
              info: "Sprint running races are short distances races in which athletes try to run at their maximum speed throughout the entire distance of the race.",
              moreinfo: "Fitness / January 22, 2022 "
            
            },
           {
            id:"9",
              img:"https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" ,
              title: "Muscular Strength",
              info: "Muscular strength is a type of fitness directly related to muscle density and endurance, allowing athletes to perform more repetitions while lifting heavier weights.",
              moreinfo: "Fitness / January 22, 2022 "
            
            },
            {
              id:"10",
              img: "https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" ,
              title: "Balance",
              info:"Improving your balance makes you feel steadier.",
              moreinfo: "Fitness / January 22, 2022 "
            
            }
           
          ]
        
      
   );

  // useEffect(()=>{
  //   axios.get("https://blog-app-backend-test.herokuapp.com/api/v1/fitness").then((res)=>
  //       setData(res.data)
  //   )
    
  //   })
  


  return(
    <Fitnesscontext.Provider value={[data]}>
        {props.children}
    </Fitnesscontext.Provider>
)
}