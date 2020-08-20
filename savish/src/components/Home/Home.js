import React from 'react'
import Info from '../AboutUs/About';
import Artwork from '../Links.js';
import styles from "./Home.module.css"
function Home() {
    return (
        <>
        <div className={styles.navbar}>
            
        </div>
        <div className={styles.savishkarheading}>
            <h2 className={styles.savishkarhead}>Sometext</h2>
            <br />
            <h3 className={styles.savishkarcaption}>Somemore text</h3>        
        </div>
        <section className={styles.abtsection}>
            <Info />
        </section>
        </>
    )
}

export default Home
{/* <div className='container-fluid '>
<div className="page-headers"className='saviskar'>
    <h2>savishkar</h2>
    <br />
    <h3 className="text-center underheading">gec art and literature club</h3>
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


</div> */}