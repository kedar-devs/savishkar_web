import React, { Component } from 'react';
import axios from 'axios'
import pic from '../photos/sa15.JPG';
export class AddUser extends Component {
    constructor(props){
        super(props);
        this.onSumbit=this.onSumbit.bind(this)
        this.state.onChangeFirst=this.state.onChangeFirst.bind(this)
        this.state.onChangeLast=this.state.onChangeLast.bind(this)
        this.state.onChangeEmail=this.state.onChangeEmail.bind(this)
        this.state.onChangePassword=this.state.onChangePassword.bind(this)
        
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:''
        }
    }
    componentDidMount(){
         this.setState({
             users:['test user'],
             username:'test user'
         })    
    }
    onChangeFirst(e){
      this.setState({
        firstname:e.target.firstname
      })
    }
    onChangeLast(e){
      this.setState({
        lastname:e.target.lastname
      })
    }
    onChangeEmail(e){
      this.setState({
        email:e.target.email
        })
        
      }
    onChangePassword(e){
      this.setState({
        password:e.target.password
      })
    }
    onSumbit(e){
        e.preventDefualt();

        const user={
           
             firstname:this.state.value,
             lastname:this.state.lastname,
             email:this.state.email,
             password:this.state.password

      }
        console.log(user)
        axios.post('http://localhost:3000/user/add',user)
        .then(res=>console.log(res.data))
        .catch(err=>console.log('Error:'+err))
    }
    render() {
        return (
            <div>
                <div>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                  <img src={pic} alt='sorru couldnt load the image' className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                    <form onSubmit={this.onSumbit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">First name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Email" value={this.state.firstname} onChange={this.onChangeFirst}/>
                    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Password" value={this.state.lastname} onChange={this.onChangeLast}/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="Email@email.com" value={this.state.email} onChange={this.onChangeEmail}/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Password</label>
    <input type="password" className="form-control" id="inputAddress2" placeholder="password" value={this.state.password} onChange={this.onChangePassword}/>
  </div>
  
    
    
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" value="" />
      <label className="form-check-label" for="gridCheck">
        Remember me
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
            </div>
            </div>
        </div>
            </div>
        )
    }
}

export default AddUser
