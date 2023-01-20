import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [data, setData] = useState([]);
    const reponse = data.Response;
    const dataBlog = data.Data;
    console.log(dataBlog);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/blog/allBlog")
            .then((res) => res.json())
            .then((res) => { setData(res) })
            .catch((err) => console.error(err))
    }, [])

    const content = dataBlog?.map((post) =>
        <div key={post.id}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Description</th>
                        <th scope="col">Time</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{post.id}</th>
                        <td>{post.subject}</td>
                        <td>{post.description}</td>
                        <td>{post.time}</td>
                        <td>
                            <a href={`/view/${post.id}`}  >View</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );

    return (
        <div className='shadow-lg p-3 m-5 bg-white rounded'>
            <button className='mb-2'>
                <a href={'/add'} className='mb-5'>Add Blog</a>
            </button>
            {content}
        </div>

    )
}

export default Blog