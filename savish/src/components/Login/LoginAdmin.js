import React, { Component } from 'react'
import logo from '../../photos/newlogo.jpeg';
import axios from 'axios';
import {router} from "react-router-dom";
//import {Redirect} from 'react-router-dom';
//import Things from './Things';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import styles from "./Login.module.css"

class LoginAdmin extends Component {
    constructor() {
        super()
        this.state = {
            username:'',
            password:''
        }
        this.warningref=React.createRef()
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        var admin={
            username: this.state.username,
            password:this.state.password
        }
        const {history}=this.props
        axios.post("http://localhost:3000/admin/login",admin)
        .then(res => {
            this.props.history.push("things")
            console.log("Succesfully logged in",res)
        })
        .catch(err=>{console.log(err)
            this.warningref.current.innerText="*User doesnot exist.Please login*"
        })
    }
    render() {
        const { error } = this.state;
        return (
            <div className={styles.loginformpage}>
            <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
                 <fieldset>
                     <img src={logo} alt="Savishkar logo" />
                     <h1>Login</h1>
                     <p ref={this.warningref} ></p>
                     <input type="email" className={styles.username} name="username" required placeholder="Username" value={this.state.username} onChange={this.onChange}  />
                     <small id="emailHelp" className={styles.emailhelp}>u'r secret is safe with us</small>
                     <input type="password" className={styles.password} name="password" required placeholder="Password" value={this.state.password} onChange={this.onChange} />
                     <button type="submit" className={styles.loginbtn} onClick={this.onSubmit} >Submit</button>
                 </fieldset>
            </form>
         </div>
        )
    }
}
export default LoginAdmin
 {/* <div className="row">
                    <div className='col-md-6 col-sm-6'>
                        <img src={logo} alt="sorry couldnt load" />
                    </div>
                    <div className="col-md-6 col-sm-6"><h1>Login</h1>
                        <form onSubmit={this.onSubmit} method="POST">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Username</label>
                                <input type="text" className="form-control" name="username"  placeholder="username" value={this.state.username} onChange={this.onChange} />
                                <small id="emailHelp" className="form-text text-muted">u'r secret is safe with us</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                            </div>


                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div> */}