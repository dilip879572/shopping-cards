import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div class="row bg-dark  p-4">
                <div class="col-sm-3 text-center p-2 ">
                    <span class="text-light fs-4">Desire</span><b class="text-mycolor">Cart <i class="fa-solid fa-cart-shopping"></i></b>
                    <br />
                    <h6 class="text-light">Address:lucknow uttar paradesh 226022<br /><br />
                        Phone: +91-8795720084<br /><br />
                        E-mail:dilip.879572@gmail.com
                    </h6>
                </div>
                <div class="col-sm-2 p-2 MT-4">
                    <h6 class="text-light text-center">Information<br />
                        <br />
                        About US<br /><br />
                        Checkout<br /><br />
                        Contact<br /><br />
                    </h6>
                </div>
                <div class="col-sm-3 p-2">
                    <h6 class="text-light text-center">My  Account<br />
                        <br />
                        My Acount<br /><br />
                        Contact<br /><br />
                        Shopping Cart<br />
                    </h6>
                </div>
                <div class="col-sm-4 p-3 px-3">
                    <h6 class="text-light text-center">join Our Neweletter NOw<br /><br />
                        Get E-mail updateabout our <br />latter shop and<br />
                        special otter<br />
                        <div class="input-group m-1 fs-3 ">
                            <input type="password" placeholder="Enter your Email" class="form-control " />
                            <i class="input-group-text  bg-mycolor text-light ">
                                SUBSCRIBE
                            </i>
                        </div>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;