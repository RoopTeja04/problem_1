import React from 'react'
import { FaGifts } from "react-icons/fa";
import { RiMobileDownloadLine } from "react-icons/ri";
import Indian_Flag from "../assets/indian-independence-movement-flag-of-india-emoji-rtcamp-solutions-pvt-ltd-png-favpng-xDmWzyFAP5Kc4TmQBAnzQurii-removebg-preview.png"

const AppDownload = () => {

    const PlayStore_Image = "https://www.aps.edu/students-parents/images/downloadOnTheGooglePlayStoreBadge.png/image";
    const AppStore_Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png";

    return (
        <>
            <div className="bg-[#1C2B3A] h-48 text-white w-[90%] mx-auto rounded-lg flex items-center justify-around">
                <div className='flex flex-col justify-center ml-4 space-y-4'>
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
                    <div className='flex items-center space-x-2 text-xl'>
                        <div className='flex'>
                            <img
                                className='h-13 w-30'
                                src={Indian_Flag} alt=''
                            />
                        </div>
                        <input
                            className='border-white border-1 outline-none px-4 py-2 rounded-md h-12 w-[120%]'
                        />
                    </div>
                    <button
                        className='bg-blue-800 w-40 h-10 cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-lg tracking-wide'
                    >
                        Get App Link
                    </button>
                </div>
                <div className='flex flex-col items-center'>
                    <a
                        href='https://play.google.com/store/games?device=windows'
                    >
                        <img
                            className='h-20.5 cursor-pointer'
                            src={PlayStore_Image} alt=''
                        />
                    </a>
                    <a
                        href='https://www.apple.com/in/app-store/'
                    >
                        <img
                            className='h-13.5 cursor-pointer'
                            src={AppStore_Image} alt=''
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export default AppDownload;