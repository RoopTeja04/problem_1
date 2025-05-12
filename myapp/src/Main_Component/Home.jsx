import React from 'react'

const Home = () => {

    const username = localStorage.getItem("userName")

    return (
        <div>Home, {username}</div>
    )
}

export default Home