import React, { Component } from 'react'
import axios from 'axios'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
//import CardGroup from 'react-bootstrap/CardGroup'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import View from './View'
import Stv from './Stv.js';
/*function onClicBut()
{
    <View paint={props.paint} />

}*/
const Paint=props=>{
    console.log('hi there',props.paint.content)
        return(
            
        
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.paint.content} alt="couldn't load the image" style={{height:'18rem'}}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.paint.painter}</Card.Title>
                    <Button variant="primary"><Link to={{pathname:'/view/:'+props.paint,data:props.paint}} >View</Link></Button>
                </Card.Body>
            </Card>
    
        )
    
}

class DisplayStory extends Component {
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
            <div className="container">
                <Router>
                <CardGroup>

                    {this.paintlist()}
                </CardGroup>
                <Route path="/view/:paint" exact component={Stv}/>
                </Router>
            </div>
        )
    }
}

export default DisplayStory
