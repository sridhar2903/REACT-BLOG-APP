import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Homecontext } from './HomeContextapi'
import Latesthome from './Latesthome'
import TopPostsDetails from './TopPostsDetails'
import LatestArticle from './LatestArticle'
import Advertisement from './Advertisement'

import './stylehome.css'







const Home = () => {


   const [latestone,latesttwo,latestthree,toppostsdetailsone,
    toppostsdetailstwo,toppostsdetailsthree,toppostsdetailsfour,
    toppostsdetailsfive,latestarticleone,latestarticletwo,latestarticlethree,
    latestarticlefour,latestarticlefive ]=useContext(Homecontext)
  

  return (
    <>
  
      <div className='homebody'>


        <br />
        {/* GRID -SECTION CONTAINING THREE IMAGES IN HOME PAGE */}
        <div id="homegrid">
          
          <div id="one-img">
          <Link to="/kerala" style={{ textDecoration: 'none',color:'black' }}>
            <div className="center-one-img">
              Kerala : God's Own Country

              <br />
              <span className="sub-text-one-img">
                Tourism / January 24, 2022
              </span>

            </div>
            </Link>
          </div>

         
          <div id="two-img">
          <Link to="/sprint" style={{ textDecoration: 'none',color:'black' }}>
                <div style={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px',textAlign:'center',paddingTop:'5em',color:'white'}}>Fitness</div>
            </Link>
          </div>

          <div id="three-img">
          <Link to="/artificialintelligence" style={{ textDecoration: 'none',color:'black' }}>
          <div style={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px',textAlign:'center',paddingTop:'5em',color:'whitesmoke'}}>Technology</div>
            </Link>
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
           <Link to="/rrr" style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latesttwo} />
          </Link>
          <Link to="/paneerbuttermasala" style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latestthree} />
          </Link>
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
          <Link to="/kerala" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsone} />
            </Link>
            <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailstwo} />
            </Link>
            <Link to="/radheshyam" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsthree} />
            </Link>
            <Link to="/cybersecurity" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfour} />
            </Link>
            <Link to="/paneerbuttermasala" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfive} />
            </Link>

          </div>

        </div>


        {/* LATEST ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/kerala" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticleone} />
          </Link>
          <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticletwo} />
          </Link>
          <Link to="/radheshyam" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlethree} />
          </Link>
          <Link to="/cybersecurity" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefour} />
          </Link>
          <Link to="/paneerbuttermasala" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefive} />
          </Link>
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
           <Link to="/rrr" style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latesttwo} />
          </Link>
          <Link to="/paneerbuttermasala" style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latestthree} />
          </Link>
        </div>


















      </div>
     
    </>
  )
}


export default Home