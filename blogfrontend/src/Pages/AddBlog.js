import React, { useState } from 'react'

const AddBlog = () => {
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const url = "/blogs";

    const doSomething = function (e) {
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
        .then(() =>  window.location.href = url);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={doSomething}>
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
    )
}

export default AddBlog