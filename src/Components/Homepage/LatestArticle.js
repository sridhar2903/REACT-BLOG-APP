import React from 'react'

const LatestArticle = ({ dataarticle }) => {
    return (
        <>

<hr className="hr-latest-info" />
            <br />
            <br />
            <br />
            <div id='container-latest-article'>
                <div>

                <img src= {dataarticle.img}  className='imglatest' alt='notfound' />
                </div>
                <div id="title-latest-article">
                    <div className="title-latest-one" style={{fontWeight:"bolder"}}>{dataarticle.title}</div>
                    <br/>
                    <div className="title-latest-two">  {dataarticle.info}</div>

                    <div className="title-latest-three" style={{fontWeight:"bolder"}}>{dataarticle.moreinfo}</div>

            </div>
            </div>
        </>
    )
}

export default LatestArticle