import React, { Component } from 'react';
import axios from 'axios';
import pic from '../photos/sa15.JPG';
import './../css/adding.css'
class AddPaint extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.contentadd=this.contentadd.bind(this)
    this.state = {
      painter: '',
      content: null,
      title: '',
      date: new Date()
    }


  }
  contentadd= async e=>{
    this.setState({
      content:e.target.files[0]
    })
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault()
    const paint = {
      painter: this.state.painter,
      content: this.state.content,
      title: this.state.title,
      date:this.state.date
    }
    console.log(paint)
    axios.post('http://localhost:3000/paint/add', paint)
      .then(res =>{ 
        this.props.history.push("things")
        console.log(res.data)})
      .catch(err => console.log('ERROR:' + err))
    window.location = '/'
  }
  render() {
    return (
      <div className="container-fluid background1">
        <br /><br /><br /><br />
        <div className="row back col-md-12">
          <div className="col-md-6 col-sm-6 img-pos">
            <img src={pic} alt='sorry could not load' className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-6 cont-pos">
            <form encType="multipart/form-data" action="http://localhost:3000/paint/add" method="post">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Title</label>
                  <input type="text" className="form-control input" id="title" placeholder="title" name="title" value={this.state.title} onChange={this.onChange} />
                </div>
                <div className="form-group col-md-6">
                  <label>painter</label>
                  <input type="text" className="form-control input" id="painter" placeholder="creator's name" name="painter" value={this.state.painter} onChange={this.onChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Content</label>
                <input type="file" className="form-control input" id="content" placeholder="single jpg or png file " name="content"  onChange={this.contentadd} />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control input" id="date" placeholder="date" name="date" value={this.state.date} onChange={this.onChange} />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPaint
