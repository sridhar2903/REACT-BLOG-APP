import React from 'react'
import './stylearticles.css'
import likes from'./imagesarticles/likes.jpg'
import iconsmall from'./imagesarticles/iconsmall.jpg'
import share from './imagesarticles/likes.jpg'
import { Link } from 'react-router-dom'
const Sprint = () => {
  return (
    <>




      {/* ARTICLE INFO WITH IMAGE AND CREDITS DETAILS -SECTION */}
      <div className='articlebody'>
        <h2 className='main-article-title'>SPRINT</h2>

        <div className="image-article-section">

          <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" className='imgarticle' alt='notfound' />,
        </div>



        {/* STICKY - ELEMENTS IN THE ARTICLE PAGE */}
        <div className='apply-sticky ' >
          <img src={likes} className='img-sticky-likes' alt='not found' /> <span className='sticky-likes' style={{ fontFamily: 'Montserrat, sans-serif' }}>15k</span>
          <br />
          <br />
          <img src={share} className='img-sticky-share' alt='not found' />  <span className='sticky-share' style={{ fontFamily: 'Montserrat, sans-serif' }}>Share this article</span>
        </div>



        <div className="text-article-section">
        If you want an efficient way to burn calories, increase your cardiovascular and muscular endurance, and take your physical fitness to the next level, then consider adding sprints and intervals to your workout routine.

Sprint workouts are a great addition to a cardio or resistance training session. You can customize them based on time, fitness level, intensity, and the space you have available for exercise.

To help get you started, here are some tips and examples of beginner and intermediate to advanced level sprint workouts.
        </div>


        <div className='topictitle-likes'>

          <div className='likes'>
            <div>
              <  img src={likes} alt='not found!!' />
            </div>
            <div className='countlikes'>
              15k
            </div>
          </div>

          <div className='topictitle'>
            <span className='title-background'>Fitness </span>

          </div>
          <br />

          <hr />
          <br />
          <br />

        </div>

        <div className='image-credits-sections'>

          <div className='image-icon-section'>

            <img src={iconsmall} alt='notfound' />
          </div>


          <div className='credits-section'>
            <p style={{ fontSize: '16px', fontFamily: 'Montserrat, sans-serif' }}>WRITTEN BY</p>
            <p style={{ fontSize: '18px', fontWeight: 'bolder', fontFamily: 'Montserrat, sans-serif' }}>Sridhar</p>
            <p style={{ fontSize: '16px', fontFamily: 'Montserrat, sans-serif' }} >January , 21 , 2022</p>
          </div>

        </div>
        <br />
        <br />
        <br />


        {/* MORE FROM THE SIREN SECTION */}


        <h1 style={{ fontFamily: 'Montserrat, sans-serif' }}> More From The Siren</h1>

        <br />
        <hr />
        <br />
        <br />

        {/* FIRST -CHILD -FOOTER */}
        <div className='footer-parent-more-siren'>
        <Link to="/aerobic" style={{ textDecoration: 'none',color:'black' }}>


          <div className='child-footer'>
            <p style={{ color: 'gray', fontSize: '20px', fontFamily: 'Montserrat, sans-serif' }}>Related Reads</p>
            <img src=" https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" className='imgfooter' alt='notfound' />,
            <h2 style={{ fontSize: '26px', fontFamily: 'Montserrat, sans-serif' }}>Aerobic</h2>


            <div className='flex-footer'>

              <div className='flex-one-footer'>

                <img src={iconsmall} alt='notfound' />
              </div>


              <div className='flex-two-footer'>

                <p style={{ fontSize: '18px', fontWeight: 'bolder', fontFamily: 'Montserrat, sans-serif' }}>Sridhar</p>
                <p style={{ fontSize: '16px', fontFamily: 'Montserrat, sans-serif' }} >January , 21 , 2022</p>
              </div>

            </div>

          </div>
          </Link>

          {/* SECOND -CHILD -FOOTER */}
          <Link to="/rrr" style={{ textDecoration: 'none',color:'black' }}>

          <div className='child-footer'>
            <p style={{ color: 'gray', fontSize: '20px', fontFamily: 'Montserrat, sans-serif' }}>Related Reads</p>
            <img src="https://images.indianexpress.com/2021/12/RRR-trailer-launch-live-blog-1200.jpg?w=389" className='imgfooter' alt='notfound' />,
            <h2 style={{ fontSize: '26px', fontFamily: 'Montserrat, sans-serif' }}>RRR Movie</h2>


            <div className='flex-footer'>

              <div className='flex-one-footer'>

                <img src={iconsmall} alt='notfound' />
              </div>


              <div className='flex-two-footer'>

                <p style={{ fontSize: '18px', fontWeight: 'bolder', fontFamily: 'Montserrat, sans-serif' }}>Sridhar</p>
                <p style={{ fontSize: '16px', fontFamily: 'Montserrat, sans-serif' }} >January , 21 , 2022</p>
              </div>

            </div>

          </div>
</Link>





          {/* THIRD CHILD FOOTER */}
          <Link to="/paneerbuttermasala" style={{ textDecoration: 'none',color:'black' }}>

          <div className='child-footer'>
            <p style={{ color: 'gray', fontSize: '20px', fontFamily: 'Montserrat, sans-serif' }}>Related Reads</p>
            <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" className='imgfooter' alt='notfound' />,
            <h2 style={{ fontSize: '26px', fontFamily: 'Montserrat, sans-serif' }}>Paneer Butter Masala</h2>



            <div className='flex-footer'>

              <div className='flex-one-footer'>

                <img src={iconsmall} alt='notfound' />
              </div>


              <div className='flex-two-footer'>

                <p style={{ fontSize: '18px', fontWeight: 'bolder', fontFamily: 'Montserrat, sans-serif' }}>Sridhar</p>
                <p style={{ fontSize: '16px', fontFamily: 'Montserrat, sans-serif' }} >January , 21 , 2022</p>
              </div>

            </div>

          </div>
</Link>

        </div>
































      </div>
    </>


  )
}

export default Sprint