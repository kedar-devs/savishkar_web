import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/important.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navigator from './components/Navigator/Navigator';
import Contact from './components/Contact';
import LoginAdmin from './components/LoginAdmin.js';
import User from './components/User.js';
import Things from './components/Things';
import DisplayPoem from './components/DisplayPoem.js';
import DisplayVideo from './components/DisplayVideo.js';
import DisplayStory from './components/DisplayStory.js';
import DisplayPaint from './components/DisplayPaint.js';
import Home from './components/Home/Home.js';
import AddPoem from './components/AddPoem';
import AddStory from './components/AddStory';
import AddVideo from './components/AddVideo';
import AddPaint from './components/AddPaint';

//import store from '/store';
function App() {
  
  return (
     
    <div className='background'>
      <Router>
            <Navigator />
            <Route path="/" exact component={Home}/>
            <Route path='/home' exact component={Home} />
            <Route path='/signin' exact component={User} />
            <Route path='/admin' exact component={LoginAdmin} />
            <Route path="/things" exact component={Things} />
            <Route path="/poemdisp" exact component={DisplayPoem} />
            <Route path="/videodisp" exact component={DisplayVideo} />
            <Route path="/paintdisp" exact component={DisplayPaint} />
            <Route path="/STORYdisp" exact component={DisplayStory} />
            <Route path="/addpoem" extends component={AddPoem} />
            <Route path="/addStory" extends component={AddStory} />
            <Route path="/addPaint" extends component={AddPaint} />
            <Route path="/addVideo" extends component={AddVideo} />
      
      <div className="container-fluid third-half">
            <div className="container">
              <div className="pre-third-half" />
              <div className="third-half">
              <h2 className="text-center">Contact Us</h2>
                <br /><br /><br />
                <Contact />
                </div>
                <div className="pre-third-half" />
            </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
