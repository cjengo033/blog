import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';


const View = () => {
    const [data, setData] = useState([]);
    const reponse = data.Response;
    const dataBlog = data.Data;
    const {id} = useParams();
    console.log(dataBlog);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/blog/show/${id}`)
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
                            <a href={`/remove/${post.id}`}  >Delete</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );

    return (
        <div>
            <h1>View</h1>
            <div>
                {content}
            </div>
        </div>

    )
}

export default View