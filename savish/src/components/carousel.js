 
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Carosel/Carosel.module.css'
export default function carousel() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1000, min: 700},
          items: 2
        },
        mobile: {
          breakpoint: { max: 700 , min: 0 },
          items: 1
        }
      };
    return (
        <div className={styles.spacing}>
            <Carousel responsive={responsive} autoPlaySpeed={200}>
            <div className={styles.card} >
            <img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
            </div>
            <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
            </div>
            <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
            </div>
            <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
            </div>
            <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
            </div>
            <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
            </div>
        </Carousel>
        </div>
        
    )
}