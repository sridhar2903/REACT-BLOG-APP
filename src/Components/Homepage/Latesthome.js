import React from 'react'

const Latesthome = ({datalatest}) => {
  return (
      <>
      <div id="latesthome">
          
    <div id="img-section-home">
      <img src={datalatest.image} id='aerobic' alt='notfound' />
    </div>
    <div id="title-section-home">
    {datalatest.title}
    </div>

    <div id="info-section-home">
    {datalatest.info}
    </div>

    <div className='subinfo-section-home sub-one ' style={{fontWeight:"bolder"}}>
     {datalatest.subinfo} 
    </div>

    </div>
    </>
  )
}

export default Latesthome