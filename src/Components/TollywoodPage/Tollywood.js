import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Tollywoodcontext } from './TollywoodContextapi'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'

import './styletollywood.css'
import { ArticleContext } from '../ArticlesAll/ArticleContext'





const Tollywood = () => {


  let [tollywooddata] = useContext(Tollywoodcontext);

  let [articledata] = useContext(ArticleContext)

  const filterlone = tollywooddata.filter((tollywooddata) => tollywooddata.id === "1")
  const tollywoodtoppostone = filterlone[0]

  const filterltwo = tollywooddata.filter((tollywooddata) => tollywooddata.id === "2")
  const tollywoodtopposttwo = filterltwo[0]

  const filterlthree = tollywooddata.filter((tollywooddata) => tollywooddata.id === '3')
  const tollywoodtoppostthree = filterlthree[0]

  const filterpone = tollywooddata.filter((tollywooddata) => tollywooddata.id === '4')
  const tollywoodtoppostfour = filterpone[0]

  const filterptwo = tollywooddata.filter((tollywooddata) => tollywooddata.id === '5')
  const tollywoodtoppostfive = filterptwo[0]

  const filterpthree = tollywooddata.filter((tollywooddata) => tollywooddata.id === '6')
  const tollywoodlatestone = filterpthree[0]

  const filterpfour = tollywooddata.filter((tollywooddata) => tollywooddata.id === '7')
  const tollywoodlatesttwo = filterpfour[0]

  const filterpfive = tollywooddata.filter((tollywooddata) => tollywooddata.id === '8')
  const tollywoodlatestthree = filterpfive[0]

  const filteraone = tollywooddata.filter((tollywooddata) => tollywooddata.id === '9')
  const tollywoodlatestfour = filteraone[0]

  const filteratwo = tollywooddata.filter((tollywooddata) => tollywooddata.id === '10')
  const tollywoodlatestfive = filteratwo[0]



  //  const dataid=articledata.filter((articledata)=>articledata.title=="PUSHPA");




  return (
    <>
      <div className='tollywoodbody'>

        {/* TOURISM ARTICLES TITLE  ONLY*/}

        <h1 className="latestarticle-home-title">
          Tollywood

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

            {articledata.filter((articledata) => articledata.title == "RADHESHYAM").map((dataid) =>
              <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
                <TopPostsDetails datapost={tollywoodtoppostone} />
              </Link>
            )}

            {articledata.filter((articledata) => articledata.title == "RRR").map((dataid) =>
              <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
                <TopPostsDetails datapost={tollywoodtopposttwo} />
              </Link>
            )}


            {articledata.filter((articledata) => articledata.title == "PUSHPA").map((dataid) =>
              <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
                <TopPostsDetails datapost={tollywoodtoppostthree} />
              </Link>
            )}




            {articledata.filter((articledata) => articledata.title == "BHEEMLA NAYAK").map((dataid) =>
              <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
                <TopPostsDetails datapost={tollywoodtoppostfour} />
              </Link>
            )}

            {articledata.filter((articledata) => articledata.title == "SALAAR").map((dataid) =>
              <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
                <TopPostsDetails datapost={tollywoodtoppostfive} />
              </Link>
            )}

          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          {articledata.filter((articledata) => articledata.title == "RADHESHYAM").map((dataid) =>
            <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
              <LatestArticle dataarticle={tollywoodlatestone} />
            </Link>
          )}

          {articledata.filter((articledata) => articledata.title == "RRR").map((dataid) =>
            <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
              <LatestArticle dataarticle={tollywoodlatesttwo} />
            </Link>
          )}
          {articledata.filter((articledata) => articledata.title == "PUSHPA").map((dataid) =>
            <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
              <LatestArticle dataarticle={tollywoodlatestthree} />
            </Link>
          )}
          {articledata.filter((articledata) => articledata.title == "BHEEMLA NAYAK").map((dataid) =>
            <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
              <LatestArticle dataarticle={tollywoodlatestfour} />
            </Link>
          )}
          {articledata.filter((articledata) => articledata.title == "SALAAR").map((dataid) =>
            <Link to={"/articles/" + dataid.id} style={{ textDecoration: 'none', color: 'black' }}>
              <LatestArticle dataarticle={tollywoodlatestfive} />
            </Link>
          )}
        </div>




        {/* ADVERTISEMENT - SECTION*/}

        <div className="floatadv-tollywood">
          <Advertisement />
        </div>

      </div>

    </>
  )
}

export default Tollywood