import React from 'react';
import BigSale from './BigSale';
import OurProduct from './OurProduct';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div className='container-fluid '>
            <div ></div>
            <div class="row sider ">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./images/hero-1.jpg" class="d-block w-100" alt="..." style={{ "min-height": "600px" }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./images/hero-2.jpg" class="d-block w-100" alt="..." style={{ "min-height": "600px" }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./images/hero-3.jpg" class="d-block w-100" alt="..." style={{ "min-height": "600px" }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="row p-2">
                <div class="col-sm-4" >
                    <img data-aos="zoom-in-up" data-aos-duration="1000" src="./images/men.jpg" class="img-thumbnail" alt='...' style={{ "minHeight": "300px" }} />
                </div>
                <div class="col-sm-4">
                    <img data-aos="zoom-in" data-aos-duration="1500" src="./images/wmen.jpeg" alt='...' class="img-thumbnail" style={{ "minHeight": "300px" }} />
                </div>
                <div class="col-sm-4">
                    <img data-aos="zoom-in-up" data-aos-duration="2000" src="./images/kid.jpg" alt='...' class="img-thumbnail" style={{ "minHeight": "300px" }} />
                </div>
            </div>
            <OurProduct/>
            <BigSale/>
            <OurServices/>
        </div>

    );
};

export default Home;