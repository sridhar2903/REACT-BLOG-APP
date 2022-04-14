import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Technologycontext } from './TechnologyContextapi'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'

import './styletechnology.css'




const Technology = () => {


  let [technologydata]=useContext(Technologycontext);

  const filterlone=technologydata.filter((technologydata)=>technologydata.id==="1")
  const  technologytoppostone=filterlone[0]
 
   const filterltwo=technologydata.filter((technologydata)=>technologydata.id==="2")
  const technologytopposttwo=filterltwo[0]
 
   const filterlthree=technologydata.filter((technologydata)=>technologydata.id==='3')
   const  technologytoppostthree=filterlthree[0]
 
   const filterpone=technologydata.filter((technologydata)=>technologydata.id==='4')
   const  technologytoppostfour=filterpone[0]
 
   const  filterptwo=technologydata.filter((technologydata)=>technologydata.id==='5')
   const technologytoppostfive=filterptwo[0]
 
   const filterpthree=technologydata.filter((technologydata)=>technologydata.id==='6')
   const technologylatestone=filterpthree[0]
   
   const filterpfour=technologydata.filter((technologydata)=>technologydata.id==='7')
   const technologylatesttwo=filterpfour[0]
 
   const filterpfive=technologydata.filter((technologydata)=>technologydata.id==='8')
   const technologylatestthree= filterpfive[0]
 
   const filteraone=technologydata.filter((technologydata)=>technologydata.id==='9')
   const technologylatestfour= filteraone[0]
 
   const filteratwo=technologydata.filter((technologydata)=>technologydata.id==='10')
   const technologylatestfive=filteratwo[0]

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