import React, { Component } from 'react'
import axios from 'axios'
import pic from '../css/mainjpg8.jpg';
class UpdatePaint extends Component {
  constructor(props)
    {
        super(props);

        this.state.onSumbit=this.state.onSumbit.bind(this)
        this.state.onChangePainter=this.state.onChangePainter.bind(this)
        this.state.onChangeTitle=this.state.onChangeTitle.bind(this)
        this.state.onChangeContent=this.state.onChangeContent.bind(this)
        this.state.onChangeDate=this.state.onChangeDate.bind(this)
        this.state={
            painter:'',
            content:'',
            title:'',
            date:new Date()
        }
        

    }
    componentDidMount(){
      axios.get('http://localhost:3000/paint/'+this.props.match.params.id)
      .then(response=>{
        this.setState({
          painter:response.date.painter,
          title:response.date.title,
          content:response.data.content,
          date:new Date(response.data.date)
        })
      })
    }

    onChangePainter(e){
      this.setState({
        painter:e.target.painter
      })
    }
    onChangeTitle(e){
      this.setState({
        title:e.target.title
      })
    }
    onChangeContent(e){
      this.setState({
        content:e.target.files[0]
        })
        
      }
    
    
    onSubmit(e){
        e.preventDefault()
        const paint={
            
                painter:this.state.painter,
                content:this.state.content,
                title:this.state.title,
                
           
        }
        console.log(paint)
          axios.post('http://localhost:3000/paint/update/'+this.props.match.params.id,paint)
          .then(res=>console.log(res.data))
          .catch(err=>console.log('ERROR:'+err))
        window.location='/'
    }
    render() {
        return (
            <div>
               <div className="row">
                <div className="col-md-6 col-sm-6">
                  <img src={pic} alt='couldnt load' />
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
      <label for="inputPassword4">Artist Name</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Password" value={this.state.painter} onChange={this.onChangePainter}/>
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


export default UpdatePaint
