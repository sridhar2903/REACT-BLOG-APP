import React from 'react'
import './styleheader.css'

import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <br /><br />
            <div id="flexhead">

                <div id="verticalheading">
                    The
                </div>
                <div id="horizontalheading">
                    SIREN
                </div>


            </div>
            <br /><br />
            <div className='header'>
                <Link to="/home" style={{ textDecoration: 'none',color:'black' }}>
                    <div id="hometab">
                        Home

                    </div>
                </Link>


                <Link to="/tourism" style={{ textDecoration: 'none',color:'black' }}>
                    <div id="tourismtab">
                        Tourism

                    </div>
                </Link>



                <Link to="/fitness" style={{ textDecoration: 'none',color:'black' }}>
                <div id="fitnesstab">
                    Fitness

                </div>
                </Link>


                <Link to="/tollywood" style={{ textDecoration: 'none',color:'black' }}>
                <div id="bollywoodtab">
                    Tollywood
                    

                </div>
                </Link>
                 

                <Link to="/technology" style={{ textDecoration: 'none',color:'black' }}>
                <div id="technologytab">
                    Technology
 
                </div>
                </Link>

                <Link to="/food" style={{ textDecoration: 'none',color:'black' }}>
                <div id="foodtab">
                    Food
 
                </div>
                </Link>

            </div>


            <hr id="hrheader" />
        </>
    )
}

export default Header