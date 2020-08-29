import React, { Component} from 'react'
import axios from 'axios'
import styles from './Display.module.css';
import PaintCard from './PaintCard';

const Paint=props=>{
        return(         
            <PaintCard post={props.paint}/>

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
