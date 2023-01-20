import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "/blog";

    const doSomething = function (e) {
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
        <div className='shadow-lg p-3 m-5 bg-white rounded'>
            <h1>Login</h1>
            <form onSubmit={doSomething}>
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
    )
}

export default Login