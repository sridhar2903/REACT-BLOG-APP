import React, {createContext } from "react";
export const Tollywoodcontext = createContext();
export const TollywoodProvider=(props)=>
{
    
// OBJECTS RELATED TO TOP POST DETAILS IN TOLLYWOOD PAGE

const tollywoodtoppostone = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imgpost' alt='notfound' />,
    titletext: <b>Radhe Shyam Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtopposttwo = {
    img: <img src="https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>RRR Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtoppostthree = {
    img: <img src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Pushpa Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtoppostfour = {
    img: <img src="https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Bheemla Nayak Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtoppostfive = {
    img: <img src="https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616" id='imgpost' alt='notfound' />,
    titletext: <b>Salaar Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN TOLLYWOOD PAGE
  
  const tollywoodlatestone = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imglatest' alt='notfound' />,
    title: <b>Radhe Shyam Movie</b>,
    info: <p>Radhe Shyam is an upcoming Indian period romantic <br/>drama film written and directed by Radha Krishna <br/> Kumar, starring Prabhas and Pooja Hegde.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatesttwo = {
    img: <img src="https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg" id='imglatest' alt='notfound' />,
    title: <b>RRR Movie</b>,
    info: <p>RRR is an upcoming Indian Telugu-language period<br/> action drama film directed by S. S. Rajamouli, and<br/> produced by D. V. V. Danayya of DVV Entertainments.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatestthree = {
    img: <img src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" id='imglatest' alt='notfound' />,
    title: <b>Pushpa Movie</b>,
    info: <p>Based on the smuggling of red sander trees<br/> in Seshachalam forest, Andhra Pradesh, Pushpa<br/> tells the story of a lorry driver who is part of <br/>the illegal business.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatestfour = {
    img: <img src="https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" id='imglatest' alt='notfound' />,
    title: <b>Bheemla Nayak Movie</b>,
    info: <p>Things change when the egos of an upright<br/> police officer and a retired army havildar clash.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatestfive = {
    img: <img src="https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616" id='imglatest' alt='notfound' />,
    title: <b>Salaar Movie</b>,
    info: <p>Salaar is an upcoming Indian action thriller film<br/> written and directed by Prashanth Neel. It stars<br/> Prabhas and Shruti Haasan. </p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }


  return(
    <Tollywoodcontext.Provider value={[tollywoodtoppostone
        ,tollywoodtopposttwo,tollywoodtoppostthree,tollywoodtoppostfour,
        tollywoodtoppostfive,tollywoodlatestone,tollywoodlatesttwo,
        tollywoodlatestthree, tollywoodlatestfour, tollywoodlatestfive]}>
        {props.children}
    </Tollywoodcontext.Provider>
)
}