import React, { useState } from 'react';
import Footer from './Footer';
import Image from '../Assets/boat.jpg'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const url = "/login";

    const doSomething = function (e) {
        fetch('http://127.0.0.1:8000/api/authentication/register?', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((json) => {
                        window.location.href = url;
                    })
                }
            }).catch((response) => {
                response.json().then((json) => {
                    console.log(json);
                })
            });
        e.preventDefault();
    }
    return (
        <>
            {/* <div className='shadow-lg p-3 m-5 bg-white rounded'>
                <h1>Register</h1>
                <form onSubmit={doSomething}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email..."
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Password</label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Password..." />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <a href='/login'>Have acc? Go Login</a>


                
            </div> */}

            <form onSubmit={doSomething}>
                <div className='container-xl shadow-sm p-3 mt-5 bg-white rounded p-5'>
                    <div className='row'>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail rounded" />
                            <p className='carousel-caption'> <a>Welcome to my Portfolio</a></p>
                        </div>
                        <div className='col'>
                            <h2 className='text-center'>Register</h2>
                            <div className='mt-4'>
                                <label>Email</label>
                                <br></br>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Email..."
                                />
                                <br></br>
                                <label>Password</label>
                                <br></br>
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Password..." />
                                <br></br>

                                <div className="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Name"
                                    />
                                </div>
                                <button type="submit" className='mt-2 mb-2 btn btn-danger form-control'>Submit</button>
                                <br></br>
                                <a href='/login' className=''>Have account? Go login now!</a>
                            </div>

                        </div>



                    </div>
                </div>
            </form>

            <Footer />
        </>

    )
}

export default Register