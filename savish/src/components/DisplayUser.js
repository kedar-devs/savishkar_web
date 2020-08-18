import React, { Component } from 'react';
import Reactplayer from 'react-player';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Stv from './Stv.js';
import axios from 'axios';
import photu from '../photos/set1.jpg';
const onAdd=(props)=>{
    
    if(props.user.type === 'poem'){
        const poem = {
            poet: props.user.firstname+props.user.lastname,
            content: props.user.content,
            title: props.user.title,
            about:props.user.discription,
            date: new Date()
          }
        axios.post('http://localhost:3000/poem/adduser',poem)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
          .catch(err=>console.log(err))
          
    axios.post('http://localhost:3000/user/deletecontent/'+props.user._id,props.user)
    .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))
    }
    if(props.user.type === 'story'){
        const story = {

            Author: props.user.firstname+props.user.lastname,
            content: props.user.content,
            about: props.user.discription,
            title: props.user.title,
            date: new Date()
          }
        
        axios.post('http://localhost:3000/story/adduser',story)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
          .catch(err=>console.log(err))
          
        axios.post('http://localhost:3000/user/deletecontent/'+props.user._id,props.user)
        .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))
    }
    
    
    if(props.user.type === 'paint'){
        
        
        const paint={
            painter: props.user.firstname+props.user.lastname,
            title:props.user.title,
            content: props.user.content,
            date:new Date()
        }
        axios.post('http://localhost:3000/paint/adduser',paint)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
          .catch(err=>console.log(err))
          
    axios.post('http://localhost:3000/user/deletecontent/'+props.user._id,props.user)
    .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))

    }
    
    if(props.user.type === 'video'){
        const video={
            creator: props.user.firstname+props.user.lastname,
            content: props.user.content,
            title: props.user.title,
            about:props.user.discription,
            date: new Date()
        }
        axios.post('http://localhost:3000/video/add',video)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
        .catch(err=>console.log(err))
          
    axios.post('http://localhost:3000/user/deletecontent/'+props.user._id,props.user)
    .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))
    
}
}
const ondelete=(props)=>{
    axios.post('http://localhost:3000/user/removecontent/'+props.user._id,props.user)
    .then(res=>{
        console.log(res.data)
        this.props.history.push("things")
      })
    .catch(err=>console.log(err))
    
}
const User=props=>{
    if(props.user.content===''){
        return(
            <div></div>
        )
    }
    if(props.user.type==="paint"){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.user.content} alt="couldn't load the image" style={{height:'18rem'}}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.user.firstname+props.user.lastname}</Card.Title>
                    <Button variant="primary"><Link to={{pathname:'/view/:'+props.user,data:props.user}} >View</Link></Button>
                    <button variant="secondary" onClick={()=>onAdd(props)}>Add</button>
                    <button variant="secondary" onClick={()=>ondelete(props)}>Remove</button>
                </Card.Body>
            </Card>
        )
    }
    else if(props.user.type!=="video"){
    return(
    //<Router>
        
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={photu} style={{ height: '18rem' }} ></Card.Img>
  <Card.Body>
    <Card.Title>{props.user.title}</Card.Title>
    <h4>By:{props.user.firstname}</h4>
    <h4>About:{props.user.discription}</h4>
    <Button variant="primary"><Link to={{pathname:'/view/:'+props.user,data:props.user}} >View</Link></Button>
    <button variant="secondary" onClick={()=>onAdd(props)}>Add</button>
    <button variant="secondary" onClick={()=>ondelete(props)}>Remove</button>
    
  </Card.Body>
  </Card>
  //</Router>
    )
    }
    else{
        return(
            <Card style={{width:"20rem"}}>

            <Card.Body>
                <Reactplayer
                    url={props.user.content}
                    style={{width:"19rem"}}
                />
                <Card.Title>{props.user.title}</Card.Title>
                <Button variant="primary"><Link to={{pathname:'/view/:'+ props.user,data:props.user}}>View</Link></Button>
            </Card.Body>
        </Card>
        )
    }
    
}


class DisplayStory extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
        this.state.userlist=this.userlist()
        
    }
    componentDidMount(){
        axios.get('http://localhost:3000/user/')
        .then(response=>{
            console.log(response.data)
            this.setState({
                user:response.data
            })
        })
        .catch(err => console.log(err))
    }
    userlist(){
        return this.state.user.map(currentuser=>{
            return<User user={currentuser} key={currentuser._id}/>
        })
    }
    render() {
        return (
            <Router>
            <div className="container">
               <CardGroup>
  
                {this.userlist()}
            </CardGroup> 
            <Route path="/view/:story" exact component={Stv}/>
            </div>
            </Router>
        )
    }
}

export default DisplayStory
