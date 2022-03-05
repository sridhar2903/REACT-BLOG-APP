import React from 'react'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'
import './styletollywood.css'
// OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE

const toppostsdetailsone = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imgpost' alt='notfound' />,
    titletext: <b>Radhe Shyam Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailstwo = {
    img: <img src="https://images.indianexpress.com/2021/12/RRR-trailer-launch-live-blog-1200.jpg?w=389" id='imgpost' alt='notfound' />,
    titletext: <b>RRR Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsthree = {
    img: <img src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Pushpa Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfour = {
    img: <img src="https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Bheemla Nayak Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfive = {
    img: <img src="https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616" id='imgpost' alt='notfound' />,
    titletext: <b>Salaar Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE
  
  const latestarticleone = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imglatest' alt='notfound' />,
    title: <b>Radhe Shyam Movie</b>,
    info: <p>Radhe Shyam is an upcoming Indian period romantic <br/>drama film written and directed by Radha Krishna <br/> Kumar, starring Prabhas and Pooja Hegde.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const latestarticletwo = {
    img: <img src="https://images.indianexpress.com/2021/12/RRR-trailer-launch-live-blog-1200.jpg?w=389" id='imglatest' alt='notfound' />,
    title: <b>RRR Movie</b>,
    info: <p>RRR is an upcoming Indian Telugu-language period<br/> action drama film directed by S. S. Rajamouli, and<br/> produced by D. V. V. Danayya of DVV Entertainments.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const latestarticlethree = {
    img: <img src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" id='imglatest' alt='notfound' />,
    title: <b>Pushpa Movie</b>,
    info: <p>Based on the smuggling of red sander trees<br/> in Seshachalam forest, Andhra Pradesh, Pushpa<br/> tells the story of a lorry driver who is part of <br/>the illegal business.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const latestarticlefour = {
    img: <img src="https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" id='imglatest' alt='notfound' />,
    title: <b>Bheemla Nayak Movie</b>,
    info: <p>Things change when the egos of an upright<br/> police officer and a retired army havildar clash.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const latestarticlefive = {
    img: <img src="https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616" id='imglatest' alt='notfound' />,
    title: <b>Salaar Movie</b>,
    info: <p>Salaar is an upcoming Indian action thriller film<br/> written and directed by Prashanth Neel. It stars<br/> Prabhas and Shruti Haasan. </p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }



const Tollywood = () => {
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

          <div  >
            <TopPostsDetails datapost={toppostsdetailsone} />
            <TopPostsDetails datapost={toppostsdetailstwo} />
            <TopPostsDetails datapost={toppostsdetailsthree} />
            <TopPostsDetails datapost={toppostsdetailsfour} />
            <TopPostsDetails datapost={toppostsdetailsfive} />

          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />

          <LatestArticle dataarticle={latestarticleone} />
          <LatestArticle dataarticle={latestarticletwo} />
          <LatestArticle dataarticle={latestarticlethree} />
          <LatestArticle dataarticle={latestarticlefour} />
          <LatestArticle dataarticle={latestarticlefive} />
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