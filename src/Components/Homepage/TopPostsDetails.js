import React from 'react'

const TopPostsDetails = ({datapost}) => {
  return (
    <>
        <div id='container-posts'>
             <div id="img-container-posts">
             <img src= {datapost.img} className='imgpost' alt='notfound' />
                 </div>
                 <div id="title-container-posts" style={{fontWeight:"bolder"}}>
                     {datapost.titletext}
                     <br/>
                         {datapost.maintitle}
                         </div> 
     
                        
        </div>
        <hr className="hr-top-posts" />
         <br/>
         <br/>
    </>
  )
}

export default TopPostsDetails