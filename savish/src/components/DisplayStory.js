import React, { Component } from 'react';
import axios from 'axios';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FileViewer from 'react-file-viewer';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Stv from './Stv.js';
import photu from '../photos/set1.jpg';
const Story=props=>{
    
    console.log(props.story._id)
    return(
    //<Router>
        
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={photu} style={{ height: '18rem' }} ></Card.Img>
  <Card.Body>
    <Card.Title>{props.story.title}</Card.Title>
    <h4>By:{props.story.Author}</h4>
    <h4>About:{props.story.about}</h4>
    <Button variant="primary"><Link to={{pathname:'/view/:'+props.story,data:props.story}} >View</Link></Button>
    
  </Card.Body>
  </Card>
  //</Router>
    )
    
}


class DisplayStory extends Component {
    constructor(props){
        super(props);
        this.state={
            story:[]
        }
        this.state.storylist=this.storylist()
        
    }
    componentDidMount(){
        axios.get('http://localhost:3000/story/')
        .then(response=>{
            console.log(response.data)
            this.setState({
                story:response.data
            })
        })
        .catch(err => console.log(err))
    }
    storylist(){
        return this.state.story.map(currentstory=>{
            return<Story story={currentstory} key={currentstory._id}/>
        })
    }
    render() {
        return (
            <Router>
            <div className="container">
               <CardGroup>
  
                {this.storylist()}
            </CardGroup> 
            <Route path="/view/:story" exact component={Stv}/>
            </div>
            </Router>
        )
    }
}

export default DisplayStory
