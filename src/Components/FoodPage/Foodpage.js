import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Foodcontext } from './FoodContextapi'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'
import './stylefood.css'
import { ArticleContext } from '../ArticlesAll/ArticleContext'




const Food = () => {


  let [fooddata]=useContext(Foodcontext);
  const[articledata] =useContext(ArticleContext)

  const filterlone=fooddata.filter((fooddata)=>fooddata.id==="1")
  const foodtoppostone=filterlone[0]
 
   const filterltwo=fooddata.filter((fooddata)=>fooddata.id==="2")
  const foodtopposttwo=filterltwo[0]
 
   const filterlthree=fooddata.filter((fooddata)=>fooddata.id==='3')
   const  foodtoppostthree=filterlthree[0]
 
   const filterpone=fooddata.filter((fooddata)=>fooddata.id==='4')
   const  foodtoppostfour=filterpone[0]
 
   const  filterptwo=fooddata.filter((fooddata)=>fooddata.id==='5')
   const foodtoppostfive=filterptwo[0]
 
   const filterpthree=fooddata.filter((fooddata)=>fooddata.id==='6')
   const foodlatestarticleone=filterpthree[0]
   
   const filterpfour=fooddata.filter((fooddata)=>fooddata.id==='7')
   const foodlatestarticletwo=filterpfour[0]
 
   const filterpfive=fooddata.filter((fooddata)=>fooddata.id==='8')
   const foodlatestarticlethree= filterpfive[0]
 
   const filteraone=fooddata.filter((fooddata)=>fooddata.id==='9')
   const foodlatestarticlefour= filteraone[0]
 
   const filteratwo=fooddata.filter((fooddata)=>fooddata.id==='10')
   const foodlatestarticlefive=filteratwo[0]

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

          <div>

          {articledata.filter((articledata) => articledata.title === "Paneer Butter Masala").map((dataid) =>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostone} />
            </Link>
          )}
           {articledata.filter((articledata) => articledata.title === "RAJMA MASALA").map((dataid) =>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtopposttwo} />
            </Link>
           )}
            
            {articledata.filter((articledata) => articledata.title === "PALAK PANEER").map((dataid) =>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostthree} />
            </Link>
            )}
             {articledata.filter((articledata) => articledata.title === "MASALA DOSA").map((dataid) =>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostfour} />
            </Link>
             )}
             {articledata.filter((articledata) => articledata.title === "PONGAL").map((dataid) =>
            <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={foodtoppostfive} />
            </Link>
             )}
          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          {articledata.filter((articledata) => articledata.title === "Paneer Butter Masala").map((dataid) =>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticleone} />
          </Link>
          )}
          {articledata.filter((articledata) => articledata.title === "RAJMA MASALA").map((dataid) =>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticletwo} />
          </Link>
          )}
          {articledata.filter((articledata) => articledata.title === "PALAK PANEER").map((dataid) =>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticlethree} />
          </Link>
          )}
          {articledata.filter((articledata) => articledata.title === "MASALA DOSA").map((dataid) =>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticlefour} />
          </Link>
          )}
          {articledata.filter((articledata) => articledata.title === "PONGAL").map((dataid) =>
          <Link to={"/articles/" + dataid.id } style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={foodlatestarticlefive} />
          </Link>
          )}
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