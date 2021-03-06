import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Fitnesscontext } from './FitnessContextapi'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'

import './stylefitness.css'
import { ArticleContext } from '../ArticlesAll/ArticleContext'




const Fitness = () => {

let [fitnessdata]=useContext(Fitnesscontext);

const [articledata]=useContext(ArticleContext)

const filterlone=fitnessdata.filter((fitnessdata)=>fitnessdata.id==="1")
  const fitnesstoppostone=filterlone[0]
 
   const filterltwo=fitnessdata.filter((fitnessdata)=>fitnessdata.id==="2")
  const fitnesstopposttwo=filterltwo[0]
 
   const filterlthree=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='3')
   const fitnesstoppostthree=filterlthree[0]
 
   const filterpone=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='4')
   const  fitnesstoppostfour=filterpone[0]
 
   const  filterptwo=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='5')
   const  fitnesstoppostfive=filterptwo[0]
 
   const filterpthree=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='6')
   const fitnesslatestone=filterpthree[0]
   
   const filterpfour=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='7')
   const fitnesslatesttwo=filterpfour[0]
 
   const filterpfive=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='8')
   const fitnesslatestthree= filterpfive[0]
 
   const filteraone=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='9')
   const fitnesslatestfour= filteraone[0]
 
   const filteratwo=fitnessdata.filter((fitnessdata)=>fitnessdata.id==='10')
   const fitnesslatestfive=filteratwo[0]


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

          <div>

          {articledata.filter((articledata)=>articledata.title==="AEROBIC").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstoppostone} />
            </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="FLEXIBILITY").map((dataid)=>
            <Link to={"/articles/" + dataid.id }  style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstopposttwo} />
            </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="SPRINT").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstoppostthree} />
            </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="MUSCULAR STRENGTH").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstoppostfour} />
            </Link>
          )}
           {articledata.filter((articledata)=>articledata.title==="BALANCE").map((dataid)=>
            <Link to={"/articles/" + dataid.id }style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={fitnesstoppostfive} />
            </Link>
           )}

          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          {articledata.filter((articledata)=>articledata.title==="AEROBIC").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestone} />
          </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="FLEXIBILITY").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatesttwo} />
          </Link>
          )}
           {articledata.filter((articledata)=>articledata.title==="SPRINT").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestthree} />
          </Link>
           )}
           {articledata.filter((articledata)=>articledata.title==="MUSCULAR STRENGTH").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestfour} />
          </Link>
           )}
           {articledata.filter((articledata)=>articledata.title==="BALANCE").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={fitnesslatestfive} />
          </Link>
           )}
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