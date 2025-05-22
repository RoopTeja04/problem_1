import React, { useState } from 'react'
import Navbar from './Navbar'
import Slider from './Slider';
import Plans from './Plans';

const Home = () => {

    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }

    return (
        <div className={`${ theme ? "bg-gray-950" : "bg-cyan-900"} flex flex-col items-center space-y-10 min-h-screen text-white transition-colors duration-500 ease-in-out`}>
            <Navbar handleTheme={handleTheme} theme={theme} />
            <Slider />
            <Plans />
        </div>
    )
}

export default Home