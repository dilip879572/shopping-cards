import React from 'react';

const CustomerSupport = () => {
    return (
        <div className='container-fluid'>
            <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10">
                        <div class="row">
                       <div className='row'>
                        <div className='col-sm-12'>
                        <p class="h2 text-center"><b class="text-danger">Contact </b><i >with Us</i></p>
                                    <p className='text-center'>You may contact us by contact number of filling in this Peofessional support or have any</p>
                                        <p class="text-center mb-2"> Peofessional support or have any qustion</p>
                        </div>
                       </div>
                                <div class="col-sm-7 mx-auto pt-2  px-5">
                                   
                                   <b class="fs-5">Send Your Massage</b><div ></div><br/>
                                 Your Name:
                            <input type="name" class="form-control" requerd placeholder="Enter your name......"/>
                            Your Contact:
                            <input type="contact" class="form-control" requerd placeholder="Enter your contact number....." />
                            Your Emai:
                            <input type="email" class="form-control" requerd placeholder="Enter your email....." />
                            Your Massage:
                            <textarea type="massage" class="form-control" requerd placeholder="Enter your massege...." ></textarea>
                            <input type="submit" value="SEND MASSAGE" class="text-light mt-4  btn btn-danger w-25"/>
                                  <br/>
                                  <br/>
                            </div>  
                            <div class="col-sm-5" data-aos="zoom-out" data-aos-duration="2000">
                                <div class="row">
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-8 pt-2" >
                                <div class="form-control">
                                    <b class="fs-3"> Contact Info</b><div ></div> <br/>
                                       <i class="fa-solid fa-location-dot text-danger ms-4"></i>
                                     <b class="text-danger ">Office Address</b><div  class="ms-5"></div>
                                     <p class="ms-4">
                                         MIHINPURWA<br/>
                                         BAHARAICH<br/>
                                         Uttar Pardesh 271855,<br/>
                                         MOb No:+8795720084</p>
                                         <div>
                                          <i class="fa-solid fa-phone text-danger ms-4"></i>
                                          <b class="text-danger ">Call Us</b><div  class="ms-5"></div>
                                          <p class="ms-4">+91-8795720084</p>
                                      </div>
                                    
                                     <div>
                                      <i class="fa-solid fa-envelope text-danger ms-4"></i>
                                     <b class="text-danger ">Mail Us</b><div  class="ms-5"></div>
                                     <p class="ms-4"> dilip.879572@gmail.com</p>
                                  </div>
                                </div>
                                    </div>
                                     <div class="col-sm-1"></div>
                                    
                            </div> 
                        </div>  
                        </div>   
                    </div>
                    <div class="col-sm-1"></div>   
                </div>

       </div>
    );
};

export default CustomerSupport;