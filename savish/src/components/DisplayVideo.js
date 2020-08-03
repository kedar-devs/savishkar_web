import React, { Component } from 'react'
import axios from 'axios'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import CardGroup from 'react-bootstrap/CardGroup'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Reactplayer from 'react-player'
import View from './View'

/*onClicBut()
{
    <View video={props.video} />
}*/
const Video = props => {
    console.log("lets get what we want")
    return (

        <Card style={{width:"20rem"}}>

            <Card.Body>
                <Reactplayer
                    url={props.video.content}
                    style={{width:"19rem"}}
                />
                <Card.Title>{props.video.title}</Card.Title>
                <Button variant="primary"><Link to={'"/view/' + props.video._id}>View</Link></Button>
            </Card.Body>
        </Card>
    )
}

class DisplayStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: []
        }
        this.state.videolist = this.videolist()

    }
    componentDidMount() {
        axios.get('http://localhost:3000/video/')
            .then(response => {
                this.setState({
                    video: response.data
                })
            })
            .catch(err => console.log(err))
    }
    videolist() {
        return this.state.video.map(currentpaint => {
            return <Video video={currentpaint} key={currentpaint._id} />
        })
    }
    render() {
        return (
            <div className="container">
                <CardGroup>
                    {this.videolist()}
                </CardGroup>
            </div>
        )
    }
}

export default DisplayStory
