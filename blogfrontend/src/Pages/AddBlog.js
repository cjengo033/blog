import React, { useState } from 'react'
import Token from './Token';

const AddBlog = () => {
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const id = localStorage.getItem("auth_id");
    const url = `/profile/${id}`;

    const submit = function (e) {
        fetch('http://127.0.0.1:8000/api/blog/create?', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: subject,
                description: description,
            })

        })
            .then(() => window.location.href = url);
        e.preventDefault();
    }
    return (
        <>
            <div className='shadow-lg p-3 m-5 bg-white rounded'>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Subject</label>
                        <input
                            onChange={e => setSubject(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Subject"
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <input
                            onChange={e => setDescription(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Subject" />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <Token />
        </>



    )
}

export default AddBlog