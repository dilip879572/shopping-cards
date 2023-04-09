import React from 'react';

const OurServices = () => {
    return (
        <div className='container-fluid'>
            <div class="row service mt-4 mb-3">
                <p class="fs-2 text-danger text-center">OUR<b class="fs-2 text-dark">SERVICES
                    <i class="fa-solid fa-wand-magic-sparkles fs-2"></i>
                </b></p>
                
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-4" data-aos="zoom-out-right" data-aos-duration="1000">
                            <div class="row">
                                <div class="col-sm-4 bg-light fs-1 text-center pt-3 border border-3 border-end-0  text-danger"><i class="fa-solid fa-truck "></i></div>
                                <div class="col-sm-8 text-center pt-3 border border-3 border-start-0  "><b>FREE SHOPING</b>
                                    <br/><p>Far all order upto 2000</p><br/></div>
                            </div>
                        </div>
                        <div class="col-sm-4" data-aos="zoom-out-right"  data-aos-duration="2000">
                            <div class="row">
                                <div class="col-sm-4 bg-light fs-1 text-center pt-3 border border-3 border-end-0  text-danger"><i class="fa-sharp fa-solid fa-clock"></i></div>
                                <div class="col-sm-8 text-center pt-3 border border-3 border-start-0  "><b>ELIVERY ON TIME</b>
                                    <br/><p>fastest Delivery at docestep</p><br/></div>
                            </div>
                        </div>
                        <div class="col-sm-4" data-aos="zoom-out-right" data-aos-duration="3000" >
                            <div class="row">
                               
                                    <div class="col-sm-4 bg-light fs-1 text-center pt-3 border border-3 border-end-0  text-danger"><i class="fa-solid fa-unlock-keyhole"></i></div>
                                <div class="col-sm-8 text-center pt-3 border border-3 border-start-0  "><b>SECURE PAYMENT</b>
                                    <br/><p>100% Secure payment</p><br/></div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default OurServices;