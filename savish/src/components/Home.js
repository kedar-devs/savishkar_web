import React from 'react'
import Info from './About.js';
import Artwork from './Links.js';
function Home() {
    return (
        <div className='container-fluid background'>
            <div className="background page-headers">
                <h1 className='text-center text-nowrap'>savishkar</h1>
                <br />
                <h2 className="text-center underheading">gec art and literature club</h2>
            </div>
            <div className=" container-fluid">

                <div className="container first-half">
                    <div className='pre-first-half' />
                    <Info/>
                    <div className="pre-first-half" />
                </div>
            </div>
            <div>
                <div className="container sec-half" >
                    <div className="pre-sec-half" />
                    <h2 className='text-center'>Artwork</h2>
                    <br /><br />
                    <Artwork />
                    <div className="pre-sec-half" />
                </div>
            </div>
            

        </div>
    )
}

export default Home
