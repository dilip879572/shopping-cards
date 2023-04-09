import React from 'react';

const BigSale = () => {
    return (
        <div className='container'>
            <div class="row">
                <span class="text-center fs-3" >BIG <b class="text-mycolor">SALE </b></span>
                <div class="col-sm-6 ">
                    <img src="./images/s2.jpg" data-aos="zoom-in-right" data-aos-duration="1500" class="img-thumbnail" alt='...' style={{ "height": "400px" }} />
                </div>
                <div class="col-sm-6 text-center p-5 " data-aos="zoom-in-left" data-aos-duration="1000">
                    <h3 class="text-mycolor">50% less in all items</h3>
                    <br />
                    <p>Find & Download Free Graphic Resources for Online
                        Shopping. 78,000+ Vectors, Stock Photos <br/>
                        Women's Sarees Home & Kitchen<br/>
                        Clothing & Wardrobe Storage<br/>
                        Men's Clothing
                        Women's Western Wear
                        Travel Duffels<br/>
                        Backpacks
                        &
                    </p>
                    <button class="btn btn-primary bg-mycolor text-center">SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};

export default BigSale;