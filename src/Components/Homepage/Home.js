import React from 'react'
import Latesthome from './Latesthome'
import TopPostsDetails from './TopPostsDetails'
import LatestArticle from './LatestArticle'
import Advertisement from './Advertisement'
import './stylehome.css'
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
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
  titletext: <b>Balance</b>,
  maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>


}
const toppostsdetailstwo = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
  titletext: <b>Balance</b>,
  maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>


}
const toppostsdetailsthree = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
  titletext: <b>Balance</b>,
  maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>


}
const toppostsdetailsfour = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
  titletext: <b>Balance</b>,
  maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>


}
const toppostsdetailsfive = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
  titletext: <b>Balance</b>,
  maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>


}


// OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE

const latestarticleone = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
  title: <b>Flexibility</b>,
  info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
  moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>

}
const latestarticletwo = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
  title: <b>Flexibility</b>,
  info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
  moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>

}
const latestarticlethree = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
  title: <b>Flexibility</b>,
  info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
  moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>

}
const latestarticlefour = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
  title: <b>Flexibility</b>,
  info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
  moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>

}
const latestarticlefive = {
  img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
  title: <b>Flexibility</b>,
  info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
  moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>

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
          <Latesthome datalatest={latestone} />
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
        <div id='top-post-home'>

          <h1 id="top-posts-article">Top Posts</h1>
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

        <div id="floatadv-home">
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
          <Latesthome datalatest={latestone} />
          <Latesthome datalatest={latesttwo} />
          <Latesthome datalatest={latestthree} />
        </div>


















      </div>
    </>
  )
}

export default Home