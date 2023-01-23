import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import Token from './Token';
import Image from '../Assets/boat.jpg'
import Footer from './Footer';
import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const View = () => {
    const [data, setData] = useState([]);
    const [blog, setBlog] = useState([]);
    const url = "/blog";
    const dataBlog = data.Data;
    const dataTest = blog.Data;
    console.log(dataTest);

    // const dataTest = blog.Data;
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

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/blog/allBlog`)

            // http://127.0.0.1:8000/api/blog/user/1
            .then((res) => res.json())
            .then((res) => { setBlog(res) })
            .catch((err) => console.error(err))
    }, [])


    const check_friend = () => {
        if (user_id != id) {
            return (
                <>
                    <div class="col-md-auto">
                        <div className='home-button'>
                            <button className='btn btn-primary'> Follow Me</button>
                        </div>
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
                        <button className='btn btn-primary'> <a href='/add'>Upload Post</a></button>
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



    const Test = () => {
        return (
            <>
                <div className='mt-5'>
                    <Container fluid>
                        <Row xs={6} md={4} lg={3}>
                            {
                                dataTest?.map((item) => (
                                    <Col
                                        key={item.id}>
                                        <div className='m-2'>
                                            <img src={Image} className="img-thumbnail" />
                                            <small className='carousel-caption text-uppercase'>{item.subject} & {item.description} </small>


                                        </div>


                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </div>


                {/* <div className='row mt-5'>
                        <div className='col'>
                           
                        </div>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                        <div className='col'>
                            <img src={Image} className="img-thumbnail" />
                        </div>
                    </div> */}

            </>
        )
    }

    const AlbumbContent1 = () => {
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
                <Test />
                <Footer />
            </>

            <Token />
        </>


    )
}

export default View