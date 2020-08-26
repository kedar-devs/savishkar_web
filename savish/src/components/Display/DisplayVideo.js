import React, { Component } from 'react'
import axios from 'axios'
import Reactplayer from 'react-player'
import styles from './Display.module.css';

const Video = props => {
    return (
        <div className={styles.display}>
            <div>
                <Reactplayer
                    width='450px'
                    height='300px'
                    url={props.video.content}
                />
                <div className={styles.tag}>{props.video.title}</div>
            </div>
        </div>
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
            <div>
                <div className={styles.video}>
                    {this.videolist()}
                </div>
            </div>
        )
    }
}

export default DisplayStory
