import React, { Component } from 'react';
import axios from 'axios'
import logo from '../../photos/newlogo.jpeg';
import styles from "./Login.module.css"
export class AddUser extends Component {
  constructor() {
    super();


    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
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

    var user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password

    }
    console.log(this.state.email)
    const { history } = this.props
    axios.post("http://localhost:3000/user/add", user,{
      'content-type': 'x-www-form-urlencoded'
  })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data)
        this.props.history.push("loginuser")
      })
      .catch(err => console.log('Error:' + err))
  }
  render() {
    return (
      <div className={styles.loginformpage}>
      <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
           <fieldset>
               <img src={logo} alt="Savishkar logo" />
               <h1>Add User</h1>
               <span>
                  <input type="text" name="firstname" value={this.state.firstname} onChange={this.onchange}  placeholder="First Name"/>
                  <input type="text"  name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.onchange} />
               </span>
               <input type="email"  name="email" placeholder="Email" value={this.state.email} onChange={this.onchange}/>
               <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onchange}/>
               {/* <input type="password" name="password" placeholder=" Confirm Password" value={this.state.password} onChange={this.onchange}/> */}
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
