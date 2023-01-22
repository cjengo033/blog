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
    const user_id = localStorage.getItem("auth_id");
    console.log(dataBlog);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/profile/user/${id}`)

            // http://127.0.0.1:8000/api/blog/user/1
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
    const check_friend = () => {
        if (user_id != id) {
            return (
                <>
                    <a className="nav-link" href="/settings">Send Friend Req</a>
                </>
            )

        } else {
            return (
                <>
                    <a className="nav-link" href="/settings">Settings</a>
                </>
            )
        }
    }

    const content = dataBlog?.map((post) =>
        <div key={post.id}>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#ID </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{post.id}</th>
                        <td>{post.name}</td>
                        <td>{post.email}</td>
                        <td>{post.created_at}</td>
                        <td>

                            {check_friend()}


                        </td>
                    </tr>
                </tbody>
            </table>

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