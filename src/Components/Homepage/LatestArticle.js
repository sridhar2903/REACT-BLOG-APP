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

                    {dataarticle.img}
                </div>
                <div id="title-latest-article">
                    <div id="title-latest-one">{dataarticle.title}</div>

                    <div id="title-latest-two">  {dataarticle.info}</div>

                    <div id="title-latest-three">{dataarticle.moreinfo}</div>

            </div>
            </div>
        </>
    )
}

export default LatestArticle