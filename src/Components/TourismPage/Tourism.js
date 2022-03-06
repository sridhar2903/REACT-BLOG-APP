import React from 'react'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'
import kerala from './kerala.jpg'
import { Link } from 'react-router-dom'
import './styletourism.css'
// OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE

const toppostsdetailsone = {
    img: <img src= {kerala} id='imgpost' alt='notfound' />,
    titletext: <b>Kerala</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailstwo = {
    img: <img src="https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Kodaikanal</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsthree = {
    img: <img src="https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Jammu And Kashmir</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfour = {
    img: <img src="https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" id='imgpost' alt='notfound' />,
    titletext: <b>Shimla</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfive = {
    img: <img src="https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Goa</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE
  
  const latestarticleone = {
    img: <img src={kerala} id='imglatest' alt='notfound' />,
    title: <b>Kerala</b>,
    info: <p>Kerala is famous especially for its ecotourism initiatives <br/> and beautiful backwaters. Its unique culture and <br/>traditions, coupled with its varied demography,<br/> have made Kerala one of the most popular tourist<br/> destinations in the world</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const latestarticletwo = {
    img: <img src="https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" id='imglatest' alt='notfound' />,
    title: <b>Kodaikanal</b>,
    info: <p>Kodaikanal is known for its rich flora. Of the big trees, <br/>cypress, eucalyptus and acacia are the dominant <br/> varieties. Pear trees are numerous and the fruits<br/> are of high quality.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const latestarticlethree = {
    img: <img src="https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" id='imglatest' alt='notfound' />,
    title: <b>Jammu And Kashmir</b>,
    info: <p>Popularly known as the "Paradise on Earth", Jammu <br/> and Kashmir is world famous for its scenic splendour,<br/> snow-capped mountains, plentiful wildlife,<br/> exquisite monuments, hospitable people and local <br/> handicrafts.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const latestarticlefour = {
    img: <img src="https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" id='imglatest' alt='notfound' />,
    title: <b>Shimla</b>,
    info: <p>The town is famous for pleasant walking experiences<br/> on hillsides surrounded by pine and oak forests.<br/> This capital city of Himachal Pradesh is famous for The <br/>Mall, ridge, and toy train. With colonial style buildings,<br/> the town has relics of ancient past that lend it a<br/> distinct look.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const latestarticlefive = {
    img: <img src="https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" id='imglatest' alt='notfound' />,
    title: <b>Goa</b>,
    info: <p>Goa is famous for adventure water sports, Goa offers <br/>the best water sports and other adventures sports<br/> such as scuba diving, paragliding, parasailing, banana <br/> boat riding and snorkelling.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }

const Tourism = () => {
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
            <TopPostsDetails datapost={toppostsdetailsone} />
            </Link>
            <Link to="/kodaikanal" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailstwo} />
            </Link>
            <Link to="/jammukashmir" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsthree} />
            </Link>
            <Link to="/shimla" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfour} />
            </Link>
            <Link to="/goa" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={toppostsdetailsfive} />
            </Link>
          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/kerala" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticleone} />
          </Link>
          <Link to="/kodaikanal" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticletwo} />
          </Link>
          <Link to="/jammukashmir" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlethree} />
          </Link>
          <Link to="/shimla" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefour} />
          </Link>
          <Link to="/goa" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={latestarticlefive} />
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