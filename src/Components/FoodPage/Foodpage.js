import React from 'react'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'
import './stylefood.css'
// OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE

const toppostsdetailsone = {
    img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imgpost' alt='notfound' />,
    titletext: <b>Paneer Butter Masala</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailstwo = {
    img: <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Rajma Masala</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsthree = {
    img: <img src="https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Palak Paneer</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfour = {
    img: <img src="http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Masala Dosa</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfive = {
    img: <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Pongal</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE
  
  const latestarticleone = {
    img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imglatest' alt='notfound' />,
    title: <b>Paneer Butter Masala</b>,
    info: <p>Paneer butter masala, also known as butter paneer is a  <br/>rich  and creamy curry made with paneer, spices, onions,<br/> tomatoes, cashews and butter.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const latestarticletwo = {
    img: <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg" id='imglatest' alt='notfound' />,
    title: <b>Rajma Masala</b>,
    info: <p>Rajma is rich in molybdenum, iron, copper, folate,<br/> manganese, potassium and Vitamin K1. Of these,<br/> iron aids in several important functions of the body,<br/> while Vitamin K1 is important for blood coagulation.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const latestarticlethree = {
    img: <img src="https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" id='imglatest' alt='notfound' />,
    title: <b>Palak Paneer</b>,
    info: <p>Palak paneer (pronounced is a vegetarian dish,<br/> consisting of paneer (a type of cottage cheese)<br/> in a thick paste made from puréed spinach,</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const latestarticlefour = {
    img: <img src="http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" id='imglatest' alt='notfound' />,
    title: <b>Masala Dosa</b>,
    info: <p>Masala dosa is a variation of the popular South Indian dosa,<br/> which has its origins in Udupi cuisine of Karnataka.<br/> It is made from rice, lentils, potato, fenugreek,<br/> ghee and curry leaves, and served with chutneys<br/> and sambar.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const latestarticlefive = {
    img: <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" id='imglatest' alt='notfound' />,
    title: <b>Pongal</b>,
    info: <p>Pongal is a delicious South Indian porridge <br/>made with rice and yellow moong lentils.<br/> It can be made sweet or savory.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }



const Food = () => {
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

        <div className="floatadv-food">
          <Advertisement />
        </div>
       
        </div>
        
        </>
  )
}

export default Food