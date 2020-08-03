import React, { Component } from 'react'
import axios from 'axios'
import pic from '../css/mainjpg8.jpg';
class UpdatePoem extends Component {
  constructor(props)
    {
        super(props);

        this.onSubmit=this.onSubmit.bind(this)
        this.onChangePoet=this.onChangePoet.bind(this)
        this.onChangeTitle=this.onChangeTitle.bind(this)
        this.onChangeContent=this.onChangeContent.bind(this)
        //this.onChangeDate=this.onChangeDate.bind(this)
        this.state={
            poet:'',
            content:'',
            title:'',
            date:new Date()
        }
        

    }
    componentDidMount(){
      axios.get('http://localhost:3000/poem/'+this.props.match.params.id)
      .then(response=>{
        this.setState({
          poet:response.date.poet,
          title:response.date.title,
          content:response.data.content,
          date:new Date(response.data.date)
        })
      })
    }

    onChangePoet(e){
      this.setState({
        poet:e.target.poet
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
        const poem={
            
                poet:this.state.poet,
                content:this.state.content,
                title:this.state.title,
                
           
        }
        console.log(poem)
          axios.post('http://localhost:3000/poem/update/'+this.props.match.params.id,poem)
          .then(res=>console.log(res.data))
          .catch(err=>console.log('ERROR:'+err))
        window.location='/'
    }
    render() {
        return (
            <div>
               <div className="row">
                <div className="col-md-6 col-sm-6">
                  <img src={pic} alt='sorru couldnt load ' />
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
      <label for="inputPassword4">Poet</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Password" value={this.state.poet} onChange={this.onChangePoet}/>
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


export default UpdatePoem
