import React, { Component } from 'react';
import { withRouter } from 'react-router';

import NavBarH from './NavBarH';

import '../forms.css';



import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
class CoverageTime extends Component {

  coverage = (values) => {

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const lp = urlParams.get('lp')
    const zip = urlParams.get('zip')


    const plan = urlParams.get('plan');
    
    //imme = lp_s3 = 50
  



    values.preventDefault();

    let cover = values.currentTarget.dataset.value;

    this.props.setCoverTime(cover);

  
    if(values  === 'immediately'){

      this.props.setLps3('50');
    }
    else {
      this.props.setLps3('12');
    }

    this.props.history.push('/income' + '?lp=' + lp + '&zip=' + zip + '&health_insurance_plan=ACA_Plan' + '&coverage_time=' + cover);
  }





  render() {
    return (
      <div className="back bg-white">
                <NavBarH />

        <div className="bg-blue-500 headerText justify-center align-middle text-center">
        <h2>Get Your Free Health Insurance Quote</h2>
        </div>
        <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
          <div className="px-4 py-8 sm:px-10">


            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">

                <div className="text-right">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    16%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                <div style={{ width: "16%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

              </div>
            </div>


            <div className="test">
              <div className="mt-6">


                <div>
                  <div className="relative flex justify-center text-sm leading-5 con">
                    <span className="px-2 text-black-500 text-3xl bold header">
                      When would you like coverage?
                    </span>
                  </div>
                </div>
                <form onSubmit={this.coverage} >
                  <div className="mt-6">
                    <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

                      <div className="text-sm leading-5 buttonBlock">
                        <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="immediately" onClick={this.coverage}>Immediatley</button>

                        <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="2 Months" onClick={this.coverage}>2 Months</button>

                        <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Not Sure" onClick={this.coverage}>Not Sure</button>


                      </div>
                    </div>
                  </div>

                </form>

              </div>

            </div>
          </div>




        </div>

      </div>


    )
  }
}

export default withRouter(CoverageTime)
