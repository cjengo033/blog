import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import Token from './Token';
import Image from '../Assets/boat.jpg'
import Footer from './Footer';

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
                    <div class="col-md-auto">
                        <button className='btn btn-primary'> Follow Me</button>
                    </div>

                    <div class="col-md-auto">
                        <button className='btn btn-primary'> Upload Post</button>
                    </div>
                </>
            )

        } else {
            return (
                <>
                    <div class="col-md-auto">
                        <button className='btn btn-primary' disabled> Follow Me</button>
                    </div>

                    <div class="col-md-auto">
                        <button className='btn btn-primary'> Upload Post</button>
                    </div>
                </>
            )
        }
    }

    const content = dataBlog?.map((user) =>
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div className=''>
                        <img src={Image} className="img-thumbnail" />
                    </div>
                </div>
                <div class="col">
                    <div className=''>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-auto">
                                    <h3>{user.name}</h3>
                                </div>

                                {check_friend()}
                            </div>

                            <div class="row mt-2">

                                <div class="col-md-auto">
                                    <p><b>1,000</b> post</p>
                                </div>
                                <div class="col-md-auto">
                                    <p><b>1,000</b> follower</p>
                                </div>

                                <div class="col-md-auto">
                                    <p><b>1,000</b> following</p>
                                </div>
                            </div>

                            <div class="row mt-2">

                                <div class="col-md-auto">
                                    <p><b>{user.name}</b> A web developer and designer</p>
                                </div>

                            </div>
                            <div class="row mt-2">
                                <div class="col-md-auto">
                                    <a href='#'>www.website-carl.com</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );

    const AlbumbContent = () => {
        return (
            <>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>

                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>

                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>

                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>

                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>

                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>

                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            {/* 
            <div className='shadow-lg p-3 m-5 bg-white rounded'>
                {content}
            </div> */}

            <>
                {content}

                <AlbumbContent />

                <Footer />
            </>

            <Token />
        </>


    )
}

export default View