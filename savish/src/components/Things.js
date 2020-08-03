import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from "react-router-dom";


class Things extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    
    return (
      <div>
        
      
      
        <table className="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Content</th>
              <th scope="col">Add</th>
              
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Poem</th>
              <td><Link to="/addpoem">Add</Link></td>
             
            </tr>
            <tr>
              <th scope="row">Paint</th>
              <td><Link to="/addpaint">Add</Link></td>
              
              
            </tr>
            <tr>
              <th scope="row">video</th>
              <td><Link to="/addvideo">Add</Link></td>
            
            </tr>
            <tr>
              <th scope="row">Story</th>
              <td><Link to="/addstory">Add</Link></td>
          
            </tr>
          
          </tbody>
        </table>
       
      </div>
     
    )
  }
}

export default Things
