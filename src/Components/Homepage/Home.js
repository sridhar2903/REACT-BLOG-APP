import React from 'react'
import Latesthome from './Latesthome'
import TopPostsDetails from './TopPostsDetails'
import LatestArticle from './LatestArticle'
import Advertisement from './Advertisement'
import kerala from './imagesforHome/kerala.jpg'
import './stylehome.css'

import { Link } from 'react-router-dom'


// OBJECTS RELATED TO LATEST IN HOME PAGE
const latestone = {
  image: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='aerobic' alt='notfound' />,
  title: "Aerobic",
  info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
  subinfo: <div id="sub-one" ><b>Fitness</b> / January 22, 2022 </div>
}

const latesttwo = {
  image: <img src="https://images.indianexpress.com/2021/12/RRR-trailer-launch-live-blog-1200.jpg?w=389" id="rrr" alt='notfound' />,
  title: "RRR Movie",
  info: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  subinfo: <div id="sub-two" ><b>Tollywood</b> / March 25, 2022 </div>
}

const latestthree = {
  image: <img src="https://thebellyrulesthemind.net/wp-content/uploads/2019/12/Air-Fryer-Tandoori-Paneer-Tikka-7-720x405.png" id="ptikka" alt='notfound' />,
  title: "Paneer Tikka",
  info: "Paneer Tikka is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.",
  subinfo: <div id="sub-three" ><b>Food</b> / January 10, 2022 </div>
}

// OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE

const toppostsdetailsone = {
  img: <img src={kerala} id='imgpost' alt='notfound' />,
  titletext: <b>Kerala : God's <br/>Own Country</b>,
  maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>


}
const toppostsdetailstwo = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
  titletext: <b>Aerobic</b>,
  maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>


}
const toppostsdetailsthree = {
  img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imgpost' alt='notfound' />,
  titletext: <b>Radhe Shyam Movie</b>,
  maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>


}
const toppostsdetailsfour = {
  img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imgpost' alt='notfound' />,
  titletext: <b>Cyber Security</b>,
  maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>


}
const toppostsdetailsfive = {
  img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imgpost' alt='notfound' />,
  titletext: <b>Paneer Butter Masala</b>,
  maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>


}


// OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE

const latestarticleone = {
  img: <img src={kerala} id='imglatest' alt='notfound' />,
  title: <b>Kerala : God's Own Country</b>,
  info: <p> Kerala is famous especially for its ecotourism initiatives <br/> and beautiful backwaters. Its unique culture and <br/>traditions, coupled with its varied demography,<br/> have made Kerala one of the most popular tourist<br/> destinations in the world</p>,
  moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>

}
const latestarticletwo = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
  title: <b>Aerobic</b>,
  info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
  moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>

}
const latestarticlethree = {
  img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imglatest' alt='notfound' />,
  title: <b>Radhe Shyam Movie</b>,
  info: <p>Radhe Shyam is an upcoming Indian period romantic <br/>drama film written and directed by Radha Krishna <br/> Kumar, starring Prabhas and Pooja Hegde.</p>,
  moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>

}
const latestarticlefour = {
  img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imglatest' alt='notfound' />,
  title: <b>Cyber Security</b>,
  info: <p>Cyber security is the application of technologies,<br/> processes and controls to protect systems, networks, <br/>programs, devices and data from cyber attacks.<br/> It aims to reduce the risk of cyber attacks and <br/> protect against the unauthorised exploitation <br/>of systems, networks and technologies.</p>,
  moreinfo: <div><b>Technology</b> / January 22, 2022 </div>

}
const latestarticlefive = {
  img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imglatest' alt='notfound' />,
  title: <b>Paneer Butter Masala</b>,
  info: <p>Paneer butter masala, also known as butter paneer is a  <br/>rich  and creamy curry made with paneer, spices, onions,<br/> tomatoes, cashews and butter.</p>,
  moreinfo: <div><b>Food</b> / January 22, 2022 </div>

}

const Home = () => {
  return (
    <>
      <div className='homebody'>


        <br />
        {/* GRID -SECTION CONTAINING THREE IMAGES IN HOME PAGE */}
        <div id="homegrid">
          <div id="one-img">

            <div className="center-one-img">
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
        <br />
        <br />

        <div className='flexlatest'>

         <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>
           <Latesthome datalatest={latestone} />
           </Link> 
          <Latesthome datalatest={latesttwo} />
          <Latesthome datalatest={latestthree} />
        </div>

        <br />
        <br />
        <br />




        {/* LATEST ARTICLES TITLE  ONLY*/}

        <h1 className="latestarticle-home-title">
          Latest Articles
        </h1>
        <hr className="hr-latest" />
        <br />
        <br />




        {/* TOP-POST-HOME-SECTION */}
        <div className='top-post-home'>

          <h1 className="top-posts-article">Top Posts</h1>
          <hr className="hr-latest" />
          <br />
          <br />

          <div  >
            <TopPostsDetails datapost={toppostsdetailsone} />
            <TopPostsDetails datapost={toppostsdetailstwo} />
            <TopPostsDetails datapost={toppostsdetailsthree} />
            <TopPostsDetails datapost={toppostsdetailsfour} />
            <TopPostsDetails datapost={toppostsdetailsfive} />

          </div>

        </div>


        {/* LATEST ARTICLES -INFO -SECTION */}
        <div >
          <br />

          <LatestArticle dataarticle={latestarticleone} />
          <LatestArticle dataarticle={latestarticletwo} />
          <LatestArticle dataarticle={latestarticlethree} />
          <LatestArticle dataarticle={latestarticlefour} />
          <LatestArticle dataarticle={latestarticlefive} />
        </div>




        {/* ADVERTISEMENT - SECTION*/}

        <div className="floatadv-home">
          <Advertisement />
        </div>



        {/* BREAK -SECTION TO CREATE SPACE */}
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br /> <br />



        {/* LATEST STORIES -SECTION */}
        <h1 className="latestarticle-home-title">
          Latest Stories
        </h1>
        <hr className="hr-latest" />
        <br />
        <br />

        <div className='flexlateststories'>
        <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>
           <Latesthome datalatest={latestone} />
           </Link>
          <Latesthome datalatest={latesttwo} />
          <Latesthome datalatest={latestthree} />
        </div>


















      </div>
    </>
  )
}

export default Home