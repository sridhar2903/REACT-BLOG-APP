import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Homecontext } from './HomeContextapi'
import Latesthome from './Latesthome'
import TopPostsDetails from './TopPostsDetails'
import LatestArticle from './LatestArticle'
import Advertisement from './Advertisement'

import './stylehome.css'
import { ArticleContext } from '../ArticlesAll/ArticleContext'







const Home = () => {

  
   const [homedata ]=useContext(Homecontext)
   const[articledata]=useContext(ArticleContext)
    

  
    const filterlone=homedata.filter((homedata)=>homedata.id==="1")
 const latestone=filterlone[0]

  const filterltwo=homedata.filter((homedata)=>homedata.id==="2")
 const latesttwo=filterltwo[0]

  const filterlthree=homedata.filter((homedata)=>homedata.id==='3')
  const latestthree=filterlthree[0]

  const filterpone=homedata.filter((homedata)=>homedata.id==='4')
  const toppostsdetailsone=filterpone[0]

  const  filterptwo=homedata.filter((homedata)=>homedata.id==='5')
  const  toppostsdetailstwo=filterptwo[0]

  const filterpthree=homedata.filter((homedata)=>homedata.id==='6')
  const toppostsdetailsthree=filterpthree[0]
  
  const filterpfour=homedata.filter((homedata)=>homedata.id==='7')
  const toppostsdetailsfour=filterpfour[0]

  const filterpfive=homedata.filter((homedata)=>homedata.id==='8')
  const toppostsdetailsfive= filterpfive[0]

  const filteraone=homedata.filter((homedata)=>homedata.id==='9')
  const latestarticleone= filteraone[0]

  const filteratwo=homedata.filter((homedata)=>homedata.id==='10')
  const latestarticletwo=filteratwo[0]
 

  const filterathree=homedata.filter((homedata)=>homedata.id==='11')
  const latestarticlethree=filterathree[0]

  const  filterafour=homedata.filter((homedata)=>homedata.id==='12')
  const  latestarticlefour=filterafour[0]

  const filterafive=homedata.filter((homedata)=>homedata.id==='13')
  const latestarticlefive=filterafive[0]
  
  

  return (
    <>
  
      <div className='homebody'>


        <br />
        {/* GRID -SECTION CONTAINING THREE IMAGES IN HOME PAGE */}
        <div id="homegrid">
          
          <div id="one-img">

          {articledata.filter((articledata)=>articledata.title==="KERALA").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <div className="center-one-img">
              Kerala : God's Own Country

              <br />
              <span className="sub-text-one-img">
                Tourism / January 24, 2022
              </span>

            </div>
            </Link>
          )}
          </div>

         
          <div id="two-img">
          {articledata.filter((articledata)=>articledata.title==="SPRINT").map((dataid)=>
          <Link to={"/articles/" + dataid.id }style={{ textDecoration: 'none',color:'black' }}>
                <div style={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px',textAlign:'center',paddingTop:'5em',color:'white'}}>Fitness</div>
            </Link>
          )}
          </div>

          <div id="three-img">
          {articledata.filter((articledata)=>articledata.title==="ARTIFICIAL INTELLIGENCE").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <div style={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px',textAlign:'center',paddingTop:'5em',color:'whitesmoke'}}>Technology</div>
            </Link>
          )}
          </div>
        </div>




        {/* THE LATEST SECTION */}

        <h1 id="latest-home-title">The Latest</h1>

        <hr className="hr-latest" />
        <br />
        <br />

        <div className='flexlatest'>

        {articledata.filter((articledata)=>articledata.title==="AEROBIC").map((dataid)=>
         <Link to={"/articles/" + dataid.id }  style={{ textDecoration: 'none',color:'black' }}>
           <Latesthome datalatest={latestone} />
           </Link> 
        )}
        {articledata.filter((articledata)=>articledata.title==="RRR").map((dataid)=>
           <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latesttwo} />
          </Link>
        )}
        {articledata.filter((articledata)=>articledata.title==="Paneer Butter Masala").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latestthree} />
          </Link>
        )}
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

          <div>

          {articledata.filter((articledata)=>articledata.title==="KERALA").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsone} />
            </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="AEROBIC").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailstwo} />
            </Link>
          )}
            
            {articledata.filter((articledata)=>articledata.title==="RADHESHYAM").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsthree} />
            </Link>
            )}
          {articledata.filter((articledata)=>articledata.title==="CYBER SECURITY").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfour} />
            </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="Paneer Butter Masala").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfive} />
            </Link>
          )}

          </div>

        </div>

         
        {/* LATEST ARTICLES -INFO -SECTION */}
        <div >
          <br />
          {articledata.filter((articledata)=>articledata.title==="KERALA").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticleone} />
          </Link>
          )}
         {articledata.filter((articledata)=>articledata.title==="AEROBIC").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticletwo} />
          </Link>
         )}
         {articledata.filter((articledata)=>articledata.title==="RADHESHYAM").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlethree} />
          </Link>
         )}
         {articledata.filter((articledata)=>articledata.title==="CYBER SECURITY").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefour} />
          </Link>
         )}
         {articledata.filter((articledata)=>articledata.title==="Paneer Butter Masala").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefive} />
          </Link>
         )}
    
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
        {articledata.filter((articledata)=>articledata.title==="AEROBIC").map((dataid)=>
        <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
           <Latesthome datalatest={latestone} />
           </Link>
        )}
        {articledata.filter((articledata)=>articledata.title==="RRR").map((dataid)=>
           <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latesttwo} />
          </Link>
        )}
        {articledata.filter((articledata)=>articledata.title==="Paneer Butter Masala").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <Latesthome datalatest={latestthree} />
          </Link>
        )}
        </div>




      </div>
     
    </>
  )
}


export default Home