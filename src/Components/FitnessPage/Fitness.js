import React from 'react'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'
import { Link } from 'react-router-dom'
import './stylefitness.css'
// OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE

const toppostsdetailsone = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
    titletext: <b>Aerobic</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailstwo = {
    img: <img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Flexibility</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsthree = {
    img: <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" id='imgpost' alt='notfound' />,
    titletext: <b>Sprint</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfour = {
    img: <img src="https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Muscular Strength</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfive = {
    img: <img src="https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Balance</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE
  
  const latestarticleone = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
    title: <b>Aerobic</b>,
    info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const latestarticletwo = {
    img: <img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" id='imglatest' alt='notfound' />,
    title: <b>Flexibility</b>,
    info: <p>A flexibility exercise is a movement or position designed<br/> to stretch specific muscles, with the goal of increasing<br/> flexibility and range of motion in that specific area. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const latestarticlethree = {
    img: <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" id='imglatest' alt='notfound' />,
    title: <b>Sprint</b>,
    info: <p>Sprint running races are short distances races in which <br/>athletes try to run at their maximum speed throughout<br/> the entire distance of the race. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const latestarticlefour = {
    img: <img src="https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" id='imglatest' alt='notfound' />,
    title: <b>Muscular Strength</b>,
    info: <p>Muscular strength is a type of fitness directly related<br/> to muscle density and endurance, allowing athletes to perform more repetitions while lifting heavier weights.</p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const latestarticlefive = {
    img: <img src="https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" id='imglatest' alt='notfound' />,
    title: <b>Balance</b>,
    info: <p>Improving your balance makes you feel steadier<br/> on your feet and helps prevent falls. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }



const Fitness = () => {
  return (
      <>
    <div className='fitnessbody'>

         {/* TOURISM ARTICLES TITLE  ONLY*/}
        
    <h1 className="latestarticle-home-title">
          Fitness
          
        </h1>
        <hr className="hr-latest" />
        <br />
        <br />




        {/* TOP-POST-TOURISM-SECTION */}
        <div className='top-post-home'>

          <h1 className="top-posts-article">Top Posts</h1>
          <hr className="hr-latest" />
          <br />
          <br />

          <div  >
          <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsone} />
            </Link>
            <Link to="/flexibility" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailstwo} />
            </Link>
            <Link to="/sprint" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsthree} />
            </Link>
            <Link to="/muscularstrength" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfour} />
            </Link>
            <Link to="/balance" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfive} />
            </Link>

          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticleone} />
          </Link>
          <Link to="/flexibility" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticletwo} />
          </Link>
          <Link to="/sprint" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlethree} />
          </Link>
          <Link to="/muscularstrength" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefour} />
          </Link>
          <Link to="/balance" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefive} />
          </Link>
        </div>




        {/* ADVERTISEMENT - SECTION*/}

        <div className="floatadv-fitness">
          <Advertisement />
        </div>
       
        </div>
        
        </>
  )
}

export default Fitness