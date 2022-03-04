import React from 'react'
import Latesthome from './Latesthome'
import TopPostsDetails from './TopPostsDetails'
import './stylehome.css'
// OBJECTS RELATED TO LATEST IN HOME PAGE
const latestone = {
  image: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='aerobic' />,
  title: "Aerobic",
  info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
  subinfo: <div id="sub-one" ><b>Fitness</b> / January 22, 2022 </div>
}

const latesttwo = {
  image: <img src="https://images.indianexpress.com/2021/12/RRR-trailer-launch-live-blog-1200.jpg?w=389" id="rrr" />,
  title: "RRR Movie",
  info: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  subinfo: <div id="sub-two" ><b>Tollywood</b> / March 25, 2022 </div>
}

const latestthree = {
  image: <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-tikka-restaurant-style.jpg" id="ptikka" />,
  title: "Paneer Tikka",
  info: "Paneer Tikka is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.",
  subinfo: <div id="sub-three" ><b>Food</b> / January 10, 2022 </div>
}

// OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE

const toppostsdetailsone={
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' />,
  titletext:<b>Balance</b>,
  maintitle:<div id="main-one-toppost" ><b>Fitness</b> / January 22, <br/>2022 </div>


}
const toppostsdetailstwo={
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' />,
  titletext:<b>Balance</b>,
  maintitle:<div id="main-one-toppost" ><b>Fitness</b> / January 22, <br/>2022 </div>


}
const toppostsdetailsthree={
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' />,
  titletext:<b>Balance</b>,
  maintitle:<div id="main-one-toppost" ><b>Fitness</b> / January 22, <br/>2022 </div>


}
const toppostsdetailsfour={
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' />,
  titletext:<b>Balance</b>,
  maintitle:<div id="main-one-toppost" ><b>Fitness</b> / January 22, <br/>2022 </div>


}
const toppostsdetailsfive={
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' />,
  titletext:<b>Balance</b>,
  maintitle:<div id="main-one-toppost" ><b>Fitness</b> / January 22, <br/>2022 </div>


}

const Home = () => {
  return (
    <>
      <div className='homebody'>


        <br />
        {/* GRID -SECTION CONTAINING THREE IMAGES IN HOME PAGE */}
        <div id="homegrid">
          <div id="one-img">

            <div class="center-one-img">
              Kerala : God's Own Country

              <br />
              <span className="sub-text-one-img">
                Tourism / January 24, 2022
              </span>

            </div>
          </div>


          <div id="two-img">
          </div>

          <div id="three-img">
          </div>
        </div>


        {/* THE LATEST SECTION */}

        <h1 id="latest-home-title">The Latest</h1>

        <hr className="hr-latest" />
         <br/>
         <br/>

        <div className='flexlatest'>
          <Latesthome datalatest={latestone} />
          <Latesthome datalatest={latesttwo} />
          <Latesthome datalatest={latestthree} />
        </div>
         

         {/* LATEST ARTICLES TITLE  ONLY*/}

         <h1 id="latestarticle-home-title">
           Latest Articles
         </h1>
         <hr className="hr-latest" />
         <br/>
         <br/>
         



        {/* TOP-POST-HOME-SECTION */}
        <div id='top-post-home'>
        
     <h1 id="top-posts-article">Top Posts</h1>
     <hr className="hr-latest" />
         <br/>
         <br/>

         <div  >
         <TopPostsDetails datapost={toppostsdetailsone}/>
         <TopPostsDetails datapost={toppostsdetailstwo}/>
         <TopPostsDetails datapost={toppostsdetailsthree}/>
         <TopPostsDetails datapost={toppostsdetailsfour}/>
         <TopPostsDetails datapost={toppostsdetailsfive}/>

         </div>
    
        </div>
    

{/* LATEST ARTICLES -INFO -SECTION */}
<div >
<br/>
        
<hr className="hr-latest-info" />
         <br/>
         <br/>
</div>
























      </div>
    </>
  )
}

export default Home