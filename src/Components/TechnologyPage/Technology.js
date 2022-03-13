import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Technologycontext } from './TechnologyContextapi'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'

import './styletechnology.css'




const Technology = () => {

  let [technologytoppostone, technologytopposttwo,technologytoppostthree,
    technologytoppostfour,technologytoppostfive,technologylatestone,
    technologylatesttwo,technologylatestthree,technologylatestfour,
    technologylatestfive]=useContext(Technologycontext);

  return (
      <>
    <div className='technologybody'>

         {/* TOURISM ARTICLES TITLE  ONLY*/}
        
    <h1 className="latestarticle-home-title">
          Technology
          
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
          <Link to="/cybersecurity" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={technologytoppostone} />
            </Link>
            <Link to="/artificialintelligence" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={technologytopposttwo} />
            </Link>
            <Link to="/blockchaintechnology" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={technologytoppostthree} />
            </Link>
            <Link to="/cryptography" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={technologytoppostfour} />
            </Link>
            <Link to="/iot" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={technologytoppostfive} />
            </Link>

          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/cybersecurity" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={technologylatestone} />
          </Link>
          <Link to="/artificialintelligence" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={technologylatesttwo} />
          </Link>
          <Link to="/blockchaintechnology" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={technologylatestthree} />
          </Link>
          <Link to="/cryptography" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={technologylatestfour} />
          </Link>
          <Link to="/iot" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={technologylatestfive} />
          </Link>
        </div>




        {/* ADVERTISEMENT - SECTION*/}

        <div className="floatadv-technology">
          <Advertisement />
        </div>
       
        </div>
        
        </>
  )
}

export default Technology