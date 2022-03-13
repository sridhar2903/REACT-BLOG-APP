import React from 'react'
import { useContext } from 'react'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'
import { Link } from 'react-router-dom'
import './stylefitness.css'
import { Categorycontext } from '../Contextapi'



const Fitness = () => {


let [latestone,latesttwo,latestthree,
  toppostsdetailsone,toppostsdetailstwo,toppostsdetailsthree,
  toppostsdetailsfour,toppostsdetailsfive,latestarticleone,
  latestarticletwo,latestarticlethree,latestarticlefour,
  latestarticlefive,fitnesstoppostone,fitnesstopposttwo,
  fitnesstoppostthree,fitnesstoppostfour,fitnesstoppostfive
  ,fitnesslatestone,fitnesslatesttwo,fitnesslatestthree,
  fitnesslatestfour,fitnesslatestfive]=useContext(Categorycontext);

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
            <TopPostsDetails datapost={fitnesstoppostone} />
            </Link>
            <Link to="/flexibility" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstopposttwo} />
            </Link>
            <Link to="/sprint" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstoppostthree} />
            </Link>
            <Link to="/muscularstrength" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstoppostfour} />
            </Link>
            <Link to="/balance" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstoppostfive} />
            </Link>

          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestone} />
          </Link>
          <Link to="/flexibility" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatesttwo} />
          </Link>
          <Link to="/sprint" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestthree} />
          </Link>
          <Link to="/muscularstrength" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestfour} />
          </Link>
          <Link to="/balance" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestfive} />
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