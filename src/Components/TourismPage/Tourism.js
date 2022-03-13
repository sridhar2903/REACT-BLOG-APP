import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {Tourismcontext} from './TourismContextapi.js'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'

import './styletourism.css'


const Tourism = () => {

  let [tourismtoppostone,tourismtopposttwo,
    tourismtoppostthree, tourismtoppostfour,tourismtoppostfive,
    tourismlatestarticleone,tourismlatestarticletwo, tourismlatestarticlethree,
    tourismlatestarticlefour,tourismlatestarticlefive]=useContext(Tourismcontext);
  return (
      <>
    <div className='tourismbody'>

         {/* TOURISM ARTICLES TITLE  ONLY*/}
        
    <h1 className="latestarticle-home-title">
          Tourism
          
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
          <Link to="/kerala" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostone} />
            </Link>
            <Link to="/kodaikanal" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtopposttwo} />
            </Link>
            <Link to="/jammukashmir" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostthree} />
            </Link>
            <Link to="/shimla" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostfour} />
            </Link>
            <Link to="/goa" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostfive} />
            </Link>
          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/kerala" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticleone} />
          </Link>
          <Link to="/kodaikanal" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticletwo} />
          </Link>
          <Link to="/jammukashmir" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticlethree} />
          </Link>
          <Link to="/shimla" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticlefour} />
          </Link>
          <Link to="/goa" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticlefive} />
          </Link>
        </div>




        {/* ADVERTISEMENT - SECTION*/}

        <div className="floatadv-tourism">
          <Advertisement />
        </div>
       
        </div>
        
        </>
  )
}

export default Tourism