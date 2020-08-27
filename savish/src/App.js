import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/important.css';
import './css/about.module.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navigator from './components/Navigator/Navigator';
import Contact from './components/Contact';
import LoginAdmin from './components/Login/LoginAdmin.js';
import User from './components/Login/User.js';
import Things from './components/Things';
import DisplayPoem from './components/Display/DisplayPoem.js';
import DisplayVideo from './components/Display/DisplayVideo.js';
import DisplayStory from './components/Display/DisplayStory.js';
import DisplayPaint from './components/Display/DisplayPaint.js';
import Home from './components/Home/Home.js';
import AddPoem from './components/AddItem/AddPoem';
import AddStory from './components/AddItem/AddStory';
import AddVideo from './components/AddItem/AddVideo';
import AddPaint from './components/AddItem/AddPaint';
import Carosel from './components/Carosel/Carosel'
import Footer from './components/Footer/Footer';
import LoginUser from './components/Login/LoginUser'
import AddUser from './components/Login/AddUser'
import DisplayUser from './components/DisplayUser'
import Func from './components/Func'
import Stv from './components/Stv'
// import './App.css'
// import About from './components/About.js'
//import store from '/store';
function App() {
  
  return (
     
    <div className='background'>
      <Router>
            <Navigator />
            {/* <Route path="/" exact component={Home}/>  */}
            {/* <Route path='/home' exact component={Home} />*/}
            <Route path="/signin" exact component={AddUser} />
            <Route path='/loginuser' exact component={LoginUser} />
            <Route path="/function" exact component={Func} />
            {/*<Route path='/admin' exact component={LoginAdmin} />*/}
            <Route path="/things" exact component={Things} /> 
            {/* <Route path="/poemdisp" exact component={DisplayPoem} />
            <Route path="/videodisp" exact component={DisplayVideo} />
            <Route path="/paintdisp" exact component={DisplayPaint} />
            <Route path="/STORYdisp" exact component={DisplayStory} /> */}
            {/* <Route path="/addpoem" extends component={AddPoem} />
            <Route path="/addStory" extends component={AddStory} />
            <Route path="/addPaint" extends component={AddPaint} /> 
            <Route path="/addVideo" extends component={AddVideo} /> */}
            <Footer />
      </Router>
   </div>
  );
}

export default App;

      {/* <div className="container-fluid third-half">
            <div className="container">
              <div className="pre-third-half" />
              <div className="third-half">
              <h2 className="text-center">Contact Us</h2>
                <br /><br /><br />
                <Contact />
                </div>
                <div className="pre-third-half" />
            </div>
      </div> */}