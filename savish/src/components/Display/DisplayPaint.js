import React, { Component,useState } from 'react'
import axios from 'axios'
import styles from './Display.module.css';
import { Lightbox } from "react-modal-image";

const Paint=props=>{
    const [open,setOpen] = useState(false);
    console.log('hi there',props.paint.content)
    console.log(props.paint.image)
        return(         
            
            <div>
                <div className={styles.card}>
                <img className={styles.image} src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="couldn't load the image"/>
                <div className={styles.body}>
                    <div className={styles.title}>Deborah Mendes</div>
                    <div className={styles.subtitle}>Music a form of art</div>
                    <button className={styles.btn} onClick={() => setOpen(true)}>View</button>
                </div>
                </div>
              {
                open && (
                    <Lightbox medium="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" hideZoom={true} hideDownload={true} onClose={() => setOpen(false)}/>
                )
              }
            </div>
        )
    
}

class DisplayPaint extends Component {
    constructor(props) {
        super(props);
        this.state={
            paint:[]
        }
        this.state.paintlist=this.paintlist()
    }
    async componentDidMount() 
        {
            
            axios.get('http://localhost:3000/paint/')
                .then(response => {
                    this.setState({
                         
                         paint: response.data
                    })
                    console.log(response.data)
                    
                })
                .catch(err => console.log('khada haii khada hai khada haii'))
        }
    
    paintlist(){
        return this.state.paint.map(currentpaint => {
            console.log(currentpaint)
            return <Paint paint={currentpaint} key={currentpaint._id} />
        })
    }
    render() {
        return (
            <div className={styles.top}>
                <div className={styles.container}>
                    {this.paintlist()}
                </div>
            </div>
        )
    }
}

export default DisplayPaint
