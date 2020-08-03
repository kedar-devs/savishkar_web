import React, { Component } from 'react'
import axios from 'axios'
import pic from '../css/mainjpg8.jpg';
class UpdateVideo extends Component {
  constructor(props)
    {
        super(props);

        this.state.onSumbit=this.state.onSumbit.bind(this)
        this.state.onChangeCreator=this.state.onChangeCreator.bind(this)
        this.state.onChangeTitle=this.state.onChangeTitle.bind(this)
        this.state.onChangeContent=this.state.onChangeContent.bind(this)
        this.state.onChangeDate=this.state.onChangeDate.bind(this)
        this.state={
            creator:'',
            content:'',
            title:'',
            date:new Date()
        }
        

    }
    componentDidMount(){
      axios.get('http://localhost:3000/video/'+this.props.match.params.id)
      .then(response=>{
        this.setState({
          creator:response.date.creator,
          title:response.date.title,
          content:response.data.content,
          date: new Date(response.data.date)
        })
      })
    }

    onChangeCreator(e){
      this.setState({
        creator:e.target.creator
      })
    }
    onChangeTitle(e){
      this.setState({
        title:e.target.title
      })
    }
    onChangeContent(e){
      this.setState({
        content:e.target.content
        })
        
      }
    
    
    onSubmit(e){
        e.preventDefault()
        const video={
            
                creator:this.state.creator,
                content:this.state.content,
                title:this.state.title,
                
           
        }
        console.log(video)
          axios.post('http://localhost:3000/video/update/'+this.props.match.params.id,video)
          .then(res=>console.log(res.data))
          .catch(err=>console.log('ERROR:'+err))
        window.location='/'
    }
    render() {
        return (
            <div>
               <div className="row">
                <div className="col-md-6 col-sm-6">
                  <img src={pic} alt='sorru couldnt load' />
                    </div>
                    <div className="col-md-6 col-sm-6">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                          <h1>Editing happens here</h1>
                        <label for="inputEmail4">Title</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Email" value={this.state.title} onChange={this.onChangeTitle}/>
                    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">creator</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Password" value={this.state.creator} onChange={this.onChangeCreator}/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Content</label>
    <input type="file" className="form-control" id="inputAddress" placeholder="Email@email.com" value={this.state.content} onChange={this.onChangeContent}/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Date</label>
    <input type="date" className="form-control" id="inputAddress2" placeholder="password" value={this.state.date} onChange={this.onChangeDate}/>
  </div>

  <button type="submit" className="btn btn-primary">Enter</button>
</form>
            </div>
            </div> 
            </div>
        )
    }
}


export default UpdateVideo
