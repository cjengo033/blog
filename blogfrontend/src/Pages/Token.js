import React from 'react'

const Token = () => {
    const url = "/login";
    const token = localStorage.getItem('auth_token');
    
    if (token == undefined) {
        window.location.href = url;
    }
        return (
            <></>
        )
}

export default Token