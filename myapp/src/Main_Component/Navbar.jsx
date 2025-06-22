import React from 'react'
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ handleTheme, theme }) => {

    const username = localStorage.getItem("userName");

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("Login")
        window.location.href = "/"
    }

    return (
        <>
            <div className='bg-green-700 text-white relative w-[92%] h-14 top-10 mx-16 rounded-4xl flex flex-row items-center px-10 justify-between'>
                <span className='text-xl font-semibold tracking-wide'>M Y T</span>
                <div className='flex space-x-15'>
                    <span className='cursor-pointer hover:text-black transition-all ease-in-out duration-400'>Home</span>
                    <span className='cursor-pointer hover:text-black transition-all ease-in-out duration-400'>Trips/Groups</span>
                    <span className='cursor-pointer hover:text-black transition-all ease-in-out duration-400'>Expenses</span>
                    <span className='cursor-pointer hover:text-black transition-all ease-in-out duration-400'>Add Expenses</span>
                </div>
                <div className='flex space-x-6'>
                    <div>
                        <span className='text-sm pr-1'>Hi, </span>
                        <span className='text-3xl font-semibold tracking-wide'>{username}</span>
                    </div>

                    <button
                        className='cursor-pointer'
                        onClick={handleTheme}
                    >{theme ? <SunnyIcon /> : <BedtimeIcon />}</button>
                    <button
                        type='button'
                        className='cursor-pointer hover:text-red-500 transition-colors duration-200 ease-linear'
                        onClick={handleLogout}
                    ><LogoutIcon /></button>
                </div>
            </div>
        </>
    )
}

export default Navbar;