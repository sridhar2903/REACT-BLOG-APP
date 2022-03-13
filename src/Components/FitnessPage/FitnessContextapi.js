import React, {createContext } from "react";
export const Fitnesscontext = createContext();
export const FitnessProvider=(props)=>
{
    
// OBJECTS RELATED TO TOP POST DETAILS IN FITNESS PAGE

const fitnesstoppostone = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
    titletext: <b>Aerobic</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstopposttwo = {
    img: <img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Flexibility</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstoppostthree = {
    img: <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" id='imgpost' alt='notfound' />,
    titletext: <b>Sprint</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstoppostfour = {
    img: <img src="https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Muscular Strength</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstoppostfive = {
    img: <img src="https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Balance</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN FITNESS PAGE
  
  const fitnesslatestone = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
    title: <b>Aerobic</b>,
    info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatesttwo = {
    img: <img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" id='imglatest' alt='notfound' />,
    title: <b>Flexibility</b>,
    info: <p>A flexibility exercise is a movement or position designed<br/> to stretch specific muscles, with the goal of increasing<br/> flexibility and range of motion in that specific area. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatestthree = {
    img: <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" id='imglatest' alt='notfound' />,
    title: <b>Sprint</b>,
    info: <p>Sprint running races are short distances races in which <br/>athletes try to run at their maximum speed throughout<br/> the entire distance of the race. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatestfour = {
    img: <img src="https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" id='imglatest' alt='notfound' />,
    title: <b>Muscular Strength</b>,
    info: <p>Muscular strength is a type of fitness directly related<br/> to muscle density and endurance, allowing athletes to perform more repetitions while lifting heavier weights.</p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatestfive = {
    img: <img src="https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" id='imglatest' alt='notfound' />,
    title: <b>Balance</b>,
    info: <p>Improving your balance makes you feel steadier<br/> on your feet and helps prevent falls. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }

  return(
    <Fitnesscontext.Provider value={[fitnesstoppostone,fitnesstopposttwo,
        fitnesstoppostthree,fitnesstoppostfour,fitnesstoppostfive
        ,fitnesslatestone,fitnesslatesttwo,fitnesslatestthree,
        fitnesslatestfour,fitnesslatestfive]}>
        {props.children}
    </Fitnesscontext.Provider>
)
}