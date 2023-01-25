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
    const [test, setTest] = useState([]);
    const [status, setStatus] = useState("");
    const { id } = useParams(); //other id
    const user_id = localStorage.getItem("auth_id"); //my id
    const url = `/profile/${id}`;
    const dataBlog = data.Data;
    const dataTest = blog.Data;
    const dataFollow = test.Data ?? "";
    const wew = dataFollow[0] ?? "";
    const { register, handleSubmit, formState: { errors } } = useForm();

    const SubmitFollow = (value) => {
        fetch(`http://127.0.0.1:8000/api/profile/sent/?`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: value,
                my_id: user_id,
                other_id: id
            })
        }).then(() => window.location.href = url);
    }

    const SubmitUnFollow = (value) => {
        fetch(`http://127.0.0.1:8000/api/profile/unfollow/${user_id}/${id}`, { method: 'DELETE' })
            .then(() => setStatus('Delete successful'))
            .then(() => window.location.href = url);
    }

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

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/profile/follow/${user_id}/${id}`)

            // http://127.0.0.1:8000/api/blog/user/1
            .then((res) => res.json())
            .then((res) => { setTest(res) })
            .catch((err) => console.error(err))
    }, [])

    const check_followed = () => {
        const follow_target_id = 1;
        if (wew.request == follow_target_id && user_id == wew.from_user && id == wew.to_user) {
            return (
                <>
                    <button className='btn btn-primary mr-1' disabled> Followed</button>
                    <button className='btn btn-primary' value={0} onClick={(e) => SubmitUnFollow(e.target.value)}> UnFollow</button>
                </>
            )
        }
        else {
            return (
                <button className='btn btn-primary' value={1} onClick={(e) => SubmitFollow(e.target.value)}> Follow Me</button>
            )
        }
    }

    const check_friend = () => {
        if (user_id != id) {
            return (
                <>
                    <div class="col-md-auto">
                        <div className='home-button'>
                            {check_followed()}
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

            </>
        )
    }
    return (
        <>
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