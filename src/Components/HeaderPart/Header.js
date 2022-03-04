import React from 'react'
import './styleheader.css'
const Header = () => {
    return (
        <>
        <br/><br/>
            <div id="flexhead">
                 
                    <div id="verticalheading">
                        The
                    </div>
                    <div id="horizontalheading">
                        SIREN
                    </div>
                   
                
            </div>
            <br/><br/>
            <div className='header'>
                <div id="hometab">
                    Home
                    <hr/>
                </div>
                
                <div id="tourismtab">
                    Tourism
                    <hr/>
                </div>
                <div id="fitnesstab">
                    Fitness
                    <hr/>
                </div>
                <div id="bollywoodtab">
                    Bollywood
                    <hr/>
                </div>
                <div id="technologytab">
                    Technology
                    <hr/>
                </div>
                <div id="foodtab">
                    Foodtab
                    <hr/>
                </div>

            </div>
            
           
            <hr id="hrheader"/>
        </>
    )
}

export default Header