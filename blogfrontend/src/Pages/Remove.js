import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Remove = () => {
    const { id } = useParams();
    const [status, setStatus] = useState("");
    const url = "/blogs";

    useEffect(() => {
        // DELETE request using fetch inside useEffect React hook
        fetch(`http://127.0.0.1:8000/api/blog/destroy/${id}`, { method: 'DELETE' })
            .then(() => setStatus('Delete successful'))
            .then(() =>  window.location.href = url);

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
}

export default Remove