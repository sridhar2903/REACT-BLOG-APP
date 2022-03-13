import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Foodcontext } from './FoodContextapi'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'
import './stylefood.css'




const Food = () => {


  let [foodtoppostone, foodtopposttwo,foodtoppostthree
    ,foodtoppostfour,foodtoppostfive,foodlatestarticleone,
    foodlatestarticletwo,foodlatestarticlethree,foodlatestarticlefour,
    foodlatestarticlefive]=useContext(Foodcontext);
  return (
      <>
    <div className='foodbody'>

         {/* TOURISM ARTICLES TITLE  ONLY*/}
        
    <h1 className="latestarticle-home-title">
          Food
          
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
          <Link to="/paneerbuttermasala" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostone} />
            </Link>
            <Link to="/rajmamasala" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtopposttwo} />
            </Link>
            <Link to="/palakpaneer" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostthree} />
            </Link>
            <Link to="/masaladosa" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostfour} />
            </Link>
            <Link to="/pongal" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostfive} />
            </Link>
          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/paneerbuttermasala" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticleone} />
          </Link>
          <Link to="/rajmamasala" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticletwo} />
          </Link>
          <Link to="/palakpaneer" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticlethree} />
          </Link>
          <Link to="/masaladosa" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticlefour} />
          </Link>
          <Link to="/pongal" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticlefive} />
          </Link>
        </div>




        {/* ADVERTISEMENT - SECTION*/}

        <div className="floatadv-food">
          <Advertisement />
        </div>
       
        </div>
        
        </>
  )
}

export default Food