import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {Tourismcontext} from './TourismContextapi.js'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'

import './styletourism.css'
import { ArticleContext } from '../ArticlesAll/ArticleContext.js'


const Tourism = () => {

  let [tourismdata]=useContext(Tourismcontext);
  let [articledata]=useContext(ArticleContext);

  const filterlone=tourismdata.filter((tourismdata)=>tourismdata.id==="1")
  const tourismtoppostone=filterlone[0]
 
   const filterltwo=tourismdata.filter((tourismdata)=>tourismdata.id==="2")
  const tourismtopposttwo=filterltwo[0]
 
   const filterlthree=tourismdata.filter((tourismdata)=>tourismdata.id==='3')
   const  tourismtoppostthree=filterlthree[0]
 
   const filterpone=tourismdata.filter((tourismdata)=>tourismdata.id==='4')
   const  tourismtoppostfour=filterpone[0]
 
   const  filterptwo=tourismdata.filter((tourismdata)=>tourismdata.id==='5')
   const  tourismtoppostfive=filterptwo[0]
 
   const filterpthree=tourismdata.filter((tourismdata)=>tourismdata.id==='6')
   const tourismlatestarticleone=filterpthree[0]
   
   const filterpfour=tourismdata.filter((tourismdata)=>tourismdata.id==='7')
   const tourismlatestarticletwo=filterpfour[0]
 
   const filterpfive=tourismdata.filter((tourismdata)=>tourismdata.id==='8')
   const tourismlatestarticlethree= filterpfive[0]
 
   const filteraone=tourismdata.filter((tourismdata)=>tourismdata.id==='9')
   const tourismlatestarticlefour= filteraone[0]
 
   const filteratwo=tourismdata.filter((tourismdata)=>tourismdata.id==='10')
   const tourismlatestarticlefive=filteratwo[0]
  
 

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

          <div>

          {articledata.filter((articledata)=>articledata.title==="KERALA").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostone} />
            </Link>
          )}

           {articledata.filter((articledata)=>articledata.title==="KODAIKANAL").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtopposttwo} />
            </Link>
           )}

            {articledata.filter((articledata)=>articledata.title==="Jammu And Kashmir").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostthree} />
            </Link>
            )}
             {articledata.filter((articledata)=>articledata.title==="Shimla").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostfour} />
            </Link>
             )}
             {articledata.filter((articledata)=>articledata.title==="Goa").map((dataid)=>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tourismtoppostfive} />
            </Link>
             )}
          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          {articledata.filter((articledata)=>articledata.title==="KERALA").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticleone} />
          </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="KODAIKANAL").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticletwo} />
          </Link>
          )}
          {articledata.filter((articledata)=>articledata.title==="Jammu And Kashmir").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticlethree} />
          </Link>
          )}
           {articledata.filter((articledata)=>articledata.title==="Shimla").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticlefour} />
          </Link>
           )}
            {articledata.filter((articledata)=>articledata.title==="Goa").map((dataid)=>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tourismlatestarticlefive} />
          </Link>
            )}
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