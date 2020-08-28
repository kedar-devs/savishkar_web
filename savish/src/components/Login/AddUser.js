import React, { Component } from 'react';
import axios from 'axios'
import logo from '../../photos/newlogo.jpeg';
import styles from "./Login.module.css"
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export class AddUser extends Component {
  constructor() {
    super();


    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      cpassword:'',
    }
    this.warningref=React.createRef()
    this.onSubmit = this.onSubmit.bind(this)
    this.onchange = this.onchange.bind(this)
  }

  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    console.log('in submit method')
    e.preventDefault()
    if(this.state.password!=this.state.cpassword)
        this.warningref.current.innerText="*The password and confirm password donot match.Please try again*"
    else if(this.state.password.length<8)
        this.warningref.current.innerText="*The password should have a minimum of 8 characters*"
    else{
      const validextension=this.state.email.split("@")[1]
      if(validateEmail(this.state.email)){
      if(validextension=="gmail.com"||validextension=="yahoo.com"||validextension=="redmail.com"||validextension=="hotmail.com"){
        var user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }
    console.log(this.state.email)
    const { history } = this.props
    alert("validated")
  //   axios.post("http://localhost:3000/user/add", user,{
  //     'content-type': 'x-www-form-urlencoded'
  // })
  //     .then(res => {
  //       console.log(res.data)
  //       localStorage.setItem('token', res.data)
  //       this.props.history.push("loginuser")
  //     })
  //     .catch(err =>{ console.log('Error:' + err)
  //                     if(err=="User Already exists")
  //                       this.warningref.current.innerText=`*${err}`
  //                     else
  //                       this.warningref.current.innerText="Oops! Sorry Something went wrong.Try again in a minute"
  //                   })
}
  else
    this.warningref.current.innerText="*Invalid Email*"    
}else{
  this.warningref.current.innerText="*Invalid Email*"
}
}
  }
  render() {
    return (
      <div className={styles.loginformpage}>
      <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
           <fieldset>
               <img src={logo} alt="Savishkar logo" />
               <h1>Add User</h1>
               <p ref={this.warningref} ></p>
               <span>
                  <input type="text" name="firstname" value={this.state.firstname} onChange={this.onchange}  placeholder="First Name" required/>
                  <input type="text"  name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.onchange} required/>
               </span>
               <input type="email"  name="email" placeholder="Email" value={this.state.email} onChange={this.onchange} required/>
               <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onchange} required/>
               <input type="password" name="cpassword" placeholder=" Confirm Password" value={this.state.cpassword} onChange={this.onchange} required/>
                <h2>WE WELCOME YOU {this.state.firstname} {this.state.lastname} !!!</h2>
               <button type="submit" >Submit</button>
           </fieldset>
      </form>
   </div>
     )
  }
}

export default AddUser
{/* <div>
        <div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <img src={pic} alt='sorru couldnt load the image' className="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-6">
              <form method="POST" onSubmit={this.onSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">First name</label>
                    <input type="text" className="form-control" name="firstname" placeholder="firstname" value={this.state.firstname} onChange={this.onchange} />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Last Name</label>
                    <input type="text" className="form-control" name="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.onchange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Email</label>
                  <input type="email" className="form-control" name="email" placeholder="Email@email.com" value={this.state.email} onChange={this.onchange} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="password" value={this.state.password} onChange={this.onchange} />
                </div>

                <h2>WE WELCOME YOU {this.state.firstname} {this.state.lastname}</h2>
                <button type="submit" className="btn btn-primary" >Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
