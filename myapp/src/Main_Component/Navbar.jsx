import React from 'react'
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ handleTheme, theme }) => {

    const username = localStorage.getItem("userName");
    const Navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("Login")
        Navigate("/")
    }

    return (
        <>
            <div className='bg-green-800 text-white relative w-[90%] h-14 top-10 mx-18 rounded-4xl flex flex-row items-center px-10 justify-between'>
                <span className='text-xl font-semibold tracking-wide'>Make My Trip</span>
                <div className='flex space-x-15'>
                    <span className='cursor-pointer'>Home</span>
                    <span className='cursor-pointer'>Trips/Groups</span>
                    <span className='cursor-pointer'>Expenses</span>
                    <span className='cursor-pointer'>Add Expenses</span>
                </div>
                <div className='flex space-x-6'>
                    <span>Hi, <span className='text-xl font-semibold tracking-wide'>{username}</span></span>
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