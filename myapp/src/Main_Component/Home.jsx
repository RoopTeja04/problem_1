import React, { useState } from 'react'
import Navbar from './Navbar'

const Home = () => {

    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }

    return (
        <div className={`${ theme ? "bg-gray-950" : "bg-cyan-900"} min-h-screen text-white transition-colors duration-500 ease-in-out`}>
            <Navbar handleTheme={handleTheme} theme={theme} />
        </div>
    )
}

export default Home