import React, {createContext, useState } from "react";
import kerala from '../Homepage/imagesforHome/kerala.jpg'
export const Tourismcontext = createContext();
export const TourismProvider=(props)=>
{
    // OBJECTS RELATED TO TOP POST DETAILS IN TOURISM PAGE

const [tourismdata]=useState(
[
  {
    id:"1",
    img: <img src= {kerala} id='imgpost' alt='notfound' />,
    titletext: <b>Kerala</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  },
  {
    id:"2",
    img: <img src="https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Kodaikanal</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  },
  {
    id:"3",
    img: <img src="https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Jammu And Kashmir</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  },
 {
  id:"4",
    img: <img src="https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" id='imgpost' alt='notfound' />,
    titletext: <b>Shimla</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  },
 {
  id:"5",
    img: <img src="https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Goa</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  },
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN TOURISM PAGE
  
 {
  id:"6",
    img: <img src={kerala} id='imglatest' alt='notfound' />,
    title: <b>Kerala</b>,
    info: <p>Kerala is famous especially for its ecotourism initiatives <br/> and beautiful backwaters. Its unique culture and <br/>traditions, coupled with its varied demography,<br/> have made Kerala one of the most popular tourist<br/> destinations in the world</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  },
   {
    id:"7",
    img: <img src="https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" id='imglatest' alt='notfound' />,
    title: <b>Kodaikanal</b>,
    info: <p>Kodaikanal is known for its rich flora. Of the big trees, <br/>cypress, eucalyptus and acacia are the dominant <br/> varieties. Pear trees are numerous and the fruits<br/> are of high quality.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  },
   {
    id:"8",
    img: <img src="https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" id='imglatest' alt='notfound' />,
    title: <b>Jammu And Kashmir</b>,
    info: <p>Popularly known as the "Paradise on Earth", Jammu <br/> and Kashmir is world famous for its scenic splendour,<br/> snow-capped mountains, plentiful wildlife,<br/> exquisite monuments, hospitable people and local <br/> handicrafts.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  },
   {
    id:"9",
    img: <img src="https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" id='imglatest' alt='notfound' />,
    title: <b>Shimla</b>,
    info: <p>The town is famous for pleasant walking experiences<br/> on hillsides surrounded by pine and oak forests.<br/> This capital city of Himachal Pradesh is famous for The <br/>Mall, ridge, and toy train. With colonial style buildings,<br/> the town has relics of ancient past that lend it a<br/> distinct look.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  },
 {
  id:"10",
    img: <img src="https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" id='imglatest' alt='notfound' />,
    title: <b>Goa</b>,
    info: <p>Goa is famous for adventure water sports, Goa offers <br/>the best water sports and other adventures sports<br/> such as scuba diving, paragliding, parasailing, banana <br/> boat riding and snorkelling.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
]
)
  return(
    <Tourismcontext.Provider value={[tourismdata]}>
        {props.children}
    </Tourismcontext.Provider>
)
}