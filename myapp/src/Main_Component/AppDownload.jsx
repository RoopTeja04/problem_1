import React from 'react'
import { FaGifts } from "react-icons/fa";
import { RiMobileDownloadLine } from "react-icons/ri";

const AppDownload = () => {
    return (
        <>
            <div class="bg-[#1C2B3A] h-48 text-white w-[90%] mx-auto rounded-lg flex items-center justify-around">
                <div className='flex flex-col justify-center ml-10 space-y-4'>
                    <div className='flex flex-row space-x-3'>
                        <RiMobileDownloadLine
                            className='size-10'
                        />
                        <h1
                            className='text-3xl font-semibold tracking-wider'
                        >Download App</h1>
                    </div>
                    <div className='flex flex-row ml-2 space-x-4'>
                        <FaGifts
                            className='size-6' 
                        />
                        <p className='flex flex-row tracking-wide space-x-2 items-center'>
                            <p>use by downloading the link and get</p> 
                            <p className='font-semibold text-xl'> 30% off</p> 
                            <p>you will</p> 
                            <p className='font-semibold text-xl'>" NEW1600 "</p> 
                            <p>code</p>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col space-y-6 items-center'>
                    <input
                        className='border-white border-1 outline-none px-4 py-2 rounded-md h-12 w-[120%]'
                    />
                    <button
                        className='bg-blue-800 w-40 h-10 cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-lg tracking-wide'
                    >
                        Get App Link
                    </button>
                </div>
            </div>
        </>
    )
}

export default AppDownload