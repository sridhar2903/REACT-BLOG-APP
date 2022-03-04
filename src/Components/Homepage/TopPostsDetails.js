import React from 'react'

const TopPostsDetails = ({datapost}) => {
  return (
    <>
        <div id='container-posts'>
             <div id="img-container-posts">
                 {datapost.img}
                 </div>
                 <div id="title-container-posts">
                     {datapost.titletext}
                    
                     
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