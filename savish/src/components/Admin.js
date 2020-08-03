import React from 'react';
import logo from '../photos/sa14.JPG';
function Admin() {
    return (
        <div>
            <div className="row">
                <div className='col-md-6 col-sm-6'>
                    <img src={logo} alt="sorry couldnt load" />
                </div>
                <div className="col-md-6 col-sm-6">
           <form>
  <div className="form-group">
    <label htmlfor="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username" value=""/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlfor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value="" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlfor="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
</div>
</div>
        </div>
    )
}

export default Admin
