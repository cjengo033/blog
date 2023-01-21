import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import Token from './Token';

const View = () => {
    const [data, setData] = useState([]);
    const url = "/blog";
    const dataBlog = data.Data;
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(dataBlog);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/blog/show/${id}`)
            .then((res) => res.json())
            .then((res) => { setData(res) })
            .catch((err) => console.error(err))
    }, [])

    const submit = function (data) {
        const obj = { subject: data.subject, description: data.description };
        const updated_blog = JSON.stringify(obj);
        console.log(updated_blog)
        fetch(`http://127.0.0.1:8000/api/blog/edit/${id}?`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: updated_blog
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
        data.preventDefault();
    }

    const content = dataBlog?.map((post) =>
        <div key={post.id}>
            <div className='shadow-lg p-3 m-5 bg-white rounded'>
                <h5>Data</h5>
                <div>
                    {errors.subject && errors.subject.type === "required" && <span className="text-danger mt-1">Subject is required</span>} <br></br>
                    {errors.description && errors.description.type === "required" && <span className="text-danger mt-1">Description is required</span>}
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Subject</label>
                        <input
                            {...register("subject", { required: true, maxLength: 30 })}
                            type="text"
                            defaultValue={post.subject}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>


                    <div className="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <input
                            {...register("description", { required: true, maxLength: 30 })}
                            type="text"
                            defaultValue={post.description}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">Update</button> <br></br>
                    <a href={`/remove/${post.id}`}  >Delete</a>

                </form>

            </div>

        </div>
    );

    return (
        <>
            <div>
                <div className='shadow-lg p-3 m-5 bg-white rounded'>
                    {content}
                </div>
            </div>



            <Token />
        </>


    )
}

export default View