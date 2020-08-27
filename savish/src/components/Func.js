  import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import axios from 'axios'

class Func extends Component {

    constructor(props) {
        super(props);
        this.onSubmit =this.onSubmit.bind(this)
        this.onchange = this.onchange.bind(this)
        this.ontype=this.ontype.bind(this)
        this.onfile= this.onfile.bind(this)
        
        this.state={
            title:'',
            content:'',
            type:'',
            discription:'',
            form:false
        }

    }
    ontype(e){
      this.setState({
        [e.target.name]:e.target.value
      })
      console.log(this.state.type)
    }
    onchange(e) {
      console.log('in change dont look haha')
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    onfile=async e=>{
      e.preventDefault()
      this.setState({
      content:e.target.files[0]
      })
      console.log(this.state.content)
    }
    onSubmit(e){
      e.preventDefault()
      console.log('in submit')
      const data=new FormData()
     data.set('encType','multipart/form-data')
     data.append('content',this.state.content)
     data.append('type',this.state.type)
     data.append('title',this.state.title)
     data.append('discription',this.state.discription)
    const user = {

      type:this.state.type,
      content: this.state.content,
      title: this.state.title,
      discription: this.state.discription
    }
    console.log(user)
    var userid=localStorage.getItem('token2')
    const {history}=this.props
    axios.post('http://localhost:3000/user/addcontent/'+userid, data)
    .then(res=>{
      console.log(res.data)
      this.props.history.push("home")
    })
    .catch(err=>console.log(err))
    }
    form=()=>{
      var userid=localStorage.getItem('token2')
      return(
        <form  encType="multipart/form-data" action="http://localhost:3000/user/addcontent/" onSubmit={this.onSubmit} method="post" >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Title</label>
            <input type="text" className="form-control input"  placeholder="title" name="title" value={this.state.title} onChange={this.onchange} required/>
          </div>
          
          
        </div>
        <div className="form-group">
          <label>Discription</label>
          <input type="text" className="form-control input"  placeholder="please add the description" name="discription" onChange={this.onchange} required/>
        </div>
        <div  style={{color: 'white'}}>
        <input type = "radio"
                 name = "type"
                 
                 value = 'poem'
                 checked={this.state.type==='poem'}
                 onChange={this.ontype}
                  />
          <label htmlFor = "sizeSmall">poem</label>
          <input type = "radio"
                 name = "type"
                
                 value = 'story'
                 checked={this.state.type==='story'}
                 onChange={this.ontype}
                 />
          <label htmlFor = "sizeMed">story</label>
          <input type = "radio"
                 name = "type"
                 
                 value = 'paint'
                 checked={this.state.type==='paint'}
                 onChange={this.ontype}
                 />
          <label htmlFor = "sizeLarge">painting</label>
          <input type = "radio"
                 name = "type"
                 
                 value = 'video'
                 checked={this.state.type==='video'}
                 onChange={this.ontype}
                 />
          <label htmlFor = "sizeLarge">video</label>
          <br />
          <p> you have selected {this.state.type}</p>
          </div>
        <h2>if file upload here</h2>
        <div className="form-group">
          <label>Content</label>
          <input type="file" className="form-control input"  placeholder="submit txt or docx file" name="content" onChange={this.onfile} ref={ref=> this.fileInput = ref}/>
        </div>
        
        
    
        <button type="submit" className="btn btn-primary" type="submit" onSubmit={this.onSubmit} >Submit</button>
      </form>
      )  
    }
    
   
    render() {
        if(!!localStorage.getItem('token')){
        return (
            <div>

               <h2>if u want to add something of your own</h2>
               <button onClick={() => this.setState({form: true}) }>click here</button> 
               {this.state.form ? this.form() : null}
               <h2>if u want to go to the home page</h2>
               <Link to='/home'>
               <button>click here</button>
               </Link>
            </div>
        )
        }
        else{
            const {history}=this.props
            this.props.history.push("loginuser")
        }
    }

}

export default Func
