import React, { useState } from 'react'
import Footer from './Footer';
import Image from '../Assets/boat.jpg'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "/blog";

    const submit = function (e) {
        fetch('http://127.0.0.1:8000/api/authentication/login?', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((json) => {
                        localStorage.setItem('auth_token', json.token)
                        localStorage.setItem('auth_id', json.id)
                        localStorage.setItem('auth_email', email)
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
                <h1>Login</h1>
                <form onSubmit={submit}>
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
                <a href='/register'>No acc yet? Go register</a>
            </div>

            <div className='shadow-lg p-3 m-5 bg-white rounded'>
                <h3>Use this account to login or you can create your own</h3>
                <ul>
                    <li>Email: hullrich@example.net</li>
                    <li>Password: password</li>
                </ul>
            </div> */}
            <form onSubmit={submit}>
                <div className='container-xl shadow-sm p-3 mt-5 bg-white rounded p-5'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='text-center'>Login</h2>
                            <div className='mt-5'>
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
                                <button type="submit" className='mt-2 mb-2 btn btn-danger form-control'>Submit</button>
                                <br></br>
                                <a href='/register' className=''>No account yet? Go register now!</a>
                            </div>

                        </div>

                        <div className='col'>
                            <img src={Image} className="img-thumbnail rounded" />
                            <p className='carousel-caption'> <a>Welcome to my Portfolio</a></p>


                        </div>

                    </div>
                </div>
            </form>




            <Footer />
        </>

    )
}

export default Login