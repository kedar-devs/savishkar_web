import React from 'react';
import insta from '../photos/inst logo.png';
import whats from '../photos/whatsapp logo.webp'; 
import twits from '../photos/twitter logo.jpg';
function Contact() {
    return (
        <div>
           <div className="row">
               <div className="col-sm-4 col-md-4">
                   <div className="text-center">
                <img src={insta} alt="sorry couldn't load" className="logos"></img>
                </div>
                <div className="text-center">
                <p>join us on instagram</p>
                </div>
               </div>
               <div className="col-sm-4 col-md-4">
                <div className="text-center">
                <img src={whats} alt="sorry couldn't load" className="logos"></img>
                </div>
                <div className="text-center">
                <p>join us on whatsapp</p>
                </div>
               </div>
               <div className="col-sm-4 col-md-4">
                   <div className="text-center">
                <img src={twits} alt="sorry couldn't load" className="logos"></img>
                </div>
                <div className="text-center">
                <p>join us on twitter</p>
                </div>
               </div>
               </div>
               <br /><br />
               <div className="text-center">
               <h4>thank you for visiting our site <br />with love savishkar</h4> 
                </div>
        </div>
    )
}

export default Contact
