import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ConnectStreams from '../ConnectMe';
import MA from '../MA';

import NavBar from '../NavBar';
import NavBarH from './health/NavBarH';
import './forms.css';
class ThankYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHealth: true
    };
  }
  
    render() {

      const urlSearch = window.location.search;

      const urlParams = new URLSearchParams(urlSearch);

      const firstName = urlParams.get('first_name');

      const phone = urlParams.get('phone_home');

      const tele = document.getElementById('tele').value;

     
      const health = urlParams.get('health')
  
      if (health === 'true') {
        this.state.isHealth = true;
      }
      else {
        this.state.isHealth = false;
  
      }
      let NavBarType;
  
      if (this.state.isHealth === true) {
        NavBarType = <NavBarH />;
      } else {
        NavBarType = <NavBar />;
      }
  

      console.log(phone)
        return (

          
            <div>
      {NavBarType}

                <div className="bg-blue-500 headerText justify-center align-middle text-center h-screen">
                <h2>Get A No Obligation Medicare Insurance Quote</h2>
                </div>
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 maDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className=" pt-1">
            <div className=" mb-2 items-center justify-between">
              
              <div className="text-center justify-center align-center">
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 content-center justify-center">
                  {firstName}'s Top Matches
                </span> 
              </div>
            </div>
          
          </div>


          <MA />

          </div>. 


          </div>
          <ConnectStreams moduleId="1658" phoneNumber={tele}  />

          </div>
  
        )
    }
}

export default withRouter(ThankYou)