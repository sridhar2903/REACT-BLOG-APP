import React from 'react'

const Latesthome = ({datalatest}) => {
  return (
      <>
      <div id="latesthome">
          
    <div id="img-section-home">
       {datalatest.image}
    </div>
    <div id="title-section-home">
    {datalatest.title}
    </div>

    <div id="info-section-home">
    {datalatest.info}
    </div>

    <div id="subinfo-section-home">
   {datalatest.subinfo}
    </div>

    </div>
    </>
  )
}

export default Latesthome