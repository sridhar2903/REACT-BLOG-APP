import React from 'react'
import './stylearticles.css'
import likes from'./imagesarticles/likes.jpg'
import iconsmall from'./imagesarticles/iconsmall.jpg'
import share from './imagesarticles/share.jpg'
import { Link } from 'react-router-dom'
const Flexibility = () => {
  return (
    <>




      {/* ARTICLE INFO WITH IMAGE AND CREDITS DETAILS -SECTION */}
      <div className='articlebody'>
        <h2 className='main-article-title'>FLEXIBILITY</h2>

        <div className="image-article-section">

          <img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" className='imgarticle' alt='notfound' />,
        </div>



        {/* STICKY - ELEMENTS IN THE ARTICLE PAGE */}
        <div className='apply-sticky ' >
          <img src={likes} className='img-sticky-likes' alt='not found' /> <span className='sticky-likes' style={{ fontFamily: 'Montserrat, sans-serif' }}>11k</span>
          <br />
          <br />
          <img src={share} className='img-sticky-share' alt='not found' />  <span className='sticky-share' style={{ fontFamily: 'Montserrat, sans-serif' }}>Share this article</span>
        </div>



        <div className="text-article-section">
        Flexibility training is stretching—lengthening and loosening muscles and connective tissues to improve flexibility. You probably know what it means when someone says they are flexible. It usually means that they can reach down and touch their toes or bend deeply into a squat. But the definition of flexibility is more complicated than simply being able to do a single stretch. True flexibility is the ability to move through a range of motion without pain.That means that each joint and each group of muscles in your body might have a different range of motion (ROM) or a different level of flexibility. Range of motion is a measurement of how much a joint can move, both in terms of distance and direction. Along with other factors, your muscles' ability to relax or contract affects your range of motion. If your muscles are inflexible, then your range of motion could be less than it should be.

        </div>


        <div className='topictitle-likes'>

          <div className='likes'>
            <div>
              <  img src={likes} alt='not found!!' />
            </div>
            <div className='countlikes'>
              11k
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
            <h2 style={{ fontSize: '26px', fontFamily: 'Montserrat, sans-serif' }}>Paneer Butter Masala </h2>



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

export default Flexibility