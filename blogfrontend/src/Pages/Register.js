import React, { useState } from 'react';

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
        <div className='shadow-lg p-3 m-5 bg-white rounded'>
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
            
        </div>
    )
}

export default Register