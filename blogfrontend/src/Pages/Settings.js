import React from 'react'
import Image from '../Assets/boat.jpg'

const Settings = () => {
    return (
        <>
            <div className='container shadow mt-5'>

                <div className='row'>
                    <div className='col-md-auto'>
                        <div className='ml-5 mt-5'>
                            <img src={Image} className="img-thumbnail" style={{ height: "250px" }} />
                        </div>
                    </div>

                    <div className='col-md-auto'>
                        <div className='mt-5'>
                            <h1>User Details</h1>
                            <ul>
                                <li>Carl Javier B. Engo</li>
                                <li>Male</li>
                                <li>July 3, 1999</li>
                                <li>09661805512</li>
                                <li>23 Kilowatt St., Marilao, Bulacan</li>
                            </ul>

                        </div>



                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='m-5'>
                            <form>
                                <label>Full Name</label>
                                <input type="text" placeholder='test..' className='form-control' />

                                <label>Email</label>
                                <input type="email" placeholder='test..' className='form-control' />

                                <label>Bday</label>
                                <input type="email" placeholder='test..' className='form-control' />
                                <button className='btn btn-primary mt-2 form-control'>Submit</button>
                            </form>
                        </div>

                    </div>


                    <div className='col'>
                        <div className='m-5'>
                            <form>
                                <label>Old Password</label>
                                <input type="password" placeholder='test..' className='form-control' />

                                <label>New Password</label>
                                <input type="password" placeholder='test..' className='form-control' />

                                <label>Re-enter New Password</label>
                                <input type="password" placeholder='test..' className='form-control' />
                                <button className='btn btn-primary mt-2 form-control'>Submit</button>
                            </form>
                        </div>



                    </div>

                </div>
            </div>


        </>
    )
}

export default Settings