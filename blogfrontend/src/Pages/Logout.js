import React from 'react'

const Logout = () => {
    const RemoveToken = () => {
        const token = localStorage.getItem("auth_token");
        const url = "/login";
        if (token != undefined) {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_email");
            window.location.href = url;
        }
    }
    return (
        <>
            <RemoveToken />
        </>
    )

}

export default Logout