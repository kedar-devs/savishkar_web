import React, { Component } from 'react'
import axios from 'axios'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FileViewer from 'react-file-viewer';
//import CardGroup from 'react-bootstrap/CardGroup'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import photu from '../photos/set1.jpg';
import Stv from './Stv.js';

const Poem = props => {
    return (
    
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photu} style={{ height: '18rem' }}>{props.poem.tilte}</Card.Img>
                <Card.Body>
                    <Card.Title><h2>{props.poem.title}</h2></Card.Title>
                    <h4>By:{props.poem.poet}</h4>
                    <h4>About:{props.poem.about}</h4>
                    <Button variant="primary"><Link to={{pathname:'/view/:'+props.poem,data:props.poem}} >View</Link></Button>
                    
                </Card.Body>
            </Card>
           
            
    )
}

class DisplayPoem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poem:[]
        }
        this.state.poemlist = this.poemlist()

    }
    componentDidMount() {
        axios.get('http://localhost:3000/poem/')
            .then(response => {
                this.setState({
                    poem: response.data
                })
            })
            .catch(err => console.log(err))
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    poemlist() {
        return this.state.poem.map(currentpoem => {
            return <Poem poem={currentpoem} key={currentpoem._id} />
        })
    }
    render() {
        console.log('in display poem')
        return (
            <div className="container">
               <Router>
               <CardColumns>

                    {this.poemlist()}
               </CardColumns>
               <Route path="/view/:poem" exact component={Stv}/>
                </Router>
            </div>
        )
    }
}

export default DisplayPoem
