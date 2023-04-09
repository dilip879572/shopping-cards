import React from 'react';

const OurProduct = () => {
    return (
        <div className='container-fluid  pb-5' style={{ "background": "#f1f3f4" }}>
            <div class="row product ms-5 pt-2 ">
                <span class="text-center fs-3 pb-3" >OUR <b class="text-mycolor">PRODUCT <i class="fa-solid fa-cart-shopping"></i></b></span>
                <div class="col-sm-3 pb-3" data-aos-duration="2000" data-aos="flip-left">
                    <div class="card" style={{ "width": "18rem" }}>
                        <img src="./images/s1.jpg" class="card-img-top img-fluid" alt="..." style={{ "height": "200px" }} width="200px;" />
                        <div class="card-body">
                            <h5 class="card-title text-center">Womens Saree</h5>
                            <h6 class="card-title text-center">Womens plina saree</h6>
                            <b>Price:
                                <i class="fa-solid sa-indian-rupee-sign"></i>
                                <s class="text-danger">8889/-</s><b class="text-mycolor">6457858/-</b>
                            </b>
                            <button class="btn btn-primary bg-mycolor ">ADD CART</button> &nbsp; &nbsp;
                            <button class="btn btn-primary bg-mycolor">ORDER NOW</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 pb-3" data-aos-duration="1500" data-aos="flip-left">
                    <div class="card" style={{ "width": "18rem" }}>
                        <img src="./images/k6.jpg" class="card-img-top img-fluid" alt="..." style={{ "height": "200px" }} width="200px;" />
                        <div class="card-body">
                            <h5 class="card-title text-center">Womens Saree</h5>
                            <h6 class="card-title text-center">Womens plina saree</h6>
                            <b>Price:
                                <i class="fa-solid sa-indian-rupee-sign"></i>
                                <s class="text-danger">8889/-</s><b class="text-mycolor">6457858/-</b>
                            </b>
                            <button class="btn btn-primary bg-mycolor ">ADD CART</button> &nbsp; &nbsp;
                            <button class="btn btn-primary bg-mycolor">ORDER NOW</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 pb-3" data-aos-duration="1100" data-aos="flip-left">
                    <div class="card" style={{ "width": "18rem" }}>
                        <img src="./images/kt4.jpeg" class="card-img-top img-fluid" alt="..." style={{ "height": "200px" }} />
                        <div class="card-body">
                            <h5 class="card-title text-center">Womens Saree</h5>
                            <h6 class="card-title text-center">Womens plina saree</h6>
                            <b>Price:
                                <i class="fa-solid sa-indian-rupee-sign"></i>
                                <s class="text-danger">8889/-</s><b class="text-mycolor">6457858/-</b>
                            </b>
                            <button class="btn btn-primary bg-mycolor ">ADD CART</button> &nbsp; &nbsp;
                            <button class="btn btn-primary bg-mycolor">ORDER NOW</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 pb-3" data-aos-duration="700" data-aos="flip-left" >
                    <div class="card" style={{ "width": "18rem" }}>
                        <img src="./images/ws4.jpeg" class="card-img-top img-fluid" alt="..." style={{ "height": "200px" }} />
                        <div class="card-body">
                            <h5 class="card-title text-center">Womens Saree</h5>
                            <h6 class="card-title text-center">Womens plina saree</h6>
                            <b>Price:
                                <i class="fa-solid sa-indian-rupee-sign"></i>
                                <s class="text-danger">8889/-</s><b class="text-mycolor">6457858/-</b>
                            </b>
                            <button class="btn btn-primary bg-mycolor ">ADD CART</button> &nbsp; &nbsp;
                            <button class="btn btn-primary bg-mycolor">ORDER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;