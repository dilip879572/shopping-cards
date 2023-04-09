import React, { useState } from 'react';

const SignUp = () => {
    
const[name,setName] = useState('');
const[email,setEmail] = useState('');
const[mobile,setMobile] = useState('');
const[password,setPassword] = useState('');


function saveData(){
    console.log({name,email,mobile,password});
    const data = {name,email,mobile,password}
    fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        result.json().then((resp)=>{
           alert("Register Successful")
            
        }).catch((err)=>{
            alert("server not response!")
        })
        
    })
            setName("")
            setEmail("")
            setPassword("")
            setMobile("")
}
    return (
        <div>
            <section class="vh-50" style={{ "backgroundColor": "#eee" }}>
                <div class="container h-80">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ "borderRadius": "25px" }}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <label class="form-label" for="form3Example1c">Your Name</label>
                                                        <input type="text" id="form3Example1c" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" />

                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0" >
                                                        <label class="form-label" for="form3Example3c">Your Email</label>
                                                        <input type="email" id="form3Example3c" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" />

                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <label class="form-label" for="form3Example4c">Mobile</label>
                                                        <input type="number" id="form3Example4c" value={mobile} onChange={(e)=>setMobile(e.target.value)} class="form-control" />

                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <label class="form-label" for="form3Example4cd">Password</label>
                                                        <input type="password" id="form3Example4cd" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" />

                                                    </div>
                                                </div>

        

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" onClick={saveData} class="btn btn-danger btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img data-aos-duration="1000" data-aos="zoom-in" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                alt="..." class="img-fluid" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;