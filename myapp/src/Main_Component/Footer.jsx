import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <>
            <div className='bg-gray-950 text-gray-300 px-14 py-10 h-65 w-full flex'>
                <div className='flex w-[40%] space-x-10'>
                    <div
                        className='relative top-4 ml-8 flex flex-col items-center w-32 space-y-4'
                    >
                        <h1
                            className='text-4xl font-bold tracking-widest underline-offset-6 underline decoration-1'
                        >MYT</h1>
                        <h1
                            className='text-md tracking-wide font-semibold'
                        >Make Your Trip</h1>
                    </div>
                    <div className='text-wrap w-50 relative top-6 left-10'>
                        <p
                            className='tracking-wide text-md'
                        >Your trusted partner for discovering the best travel experiences and curated trip plans.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-4'>
                    <h1 className='text-md font-semibold underline underline-offset-6 decoration-1'>Quick Links</h1>
                    <div className="grid grid-cols-2 gap-x-6 text-sm">
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:underline tracking-wide text-md">About Us</a></li>
                            <li><a href="/services" className="hover:underline tracking-wide text-md">Services</a></li>
                            <li><a href="/destinations" className="hover:underline tracking-wide text-md">Destinations</a></li>
                            <li><a href="/blog" className="hover:underline tracking-wide text-md">Travel Blog</a></li>
                            <li><a href="/testimonials" className="hover:underline tracking-wide text-md">Testimonials</a></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><a href="/faq" className="hover:underline tracking-wide text-md">FAQ</a></li>
                            <li><a href="/contact" className="hover:underline tracking-wide text-md">Contact</a></li>
                            <li><a href="/careers" className="hover:underline tracking-wide text-md">Careers</a></li>
                            <li><a href="/privacy-policy" className="hover:underline tracking-wide text-md">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:underline tracking-wide text-md">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col relative left-24'>
                    <h1 className='text-md font-semibold underline underline-offset-6 decoration-1'>Stay Connected</h1>
                    <div className='grid grid-cols-2 gap-5 items-center mt-6 ml-2'>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-500"><FaInstagram className='size-7' /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-500"><FaLinkedin className='size-7' /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-500"><FaTwitter className='size-7' /></a>
                        <a href="mailto:support@tripplanner.com" className="hover:text-green-500"><SiGmail className='size-7' /></a>
                    </div>
                </div>
                <div className="flex flex-col w-40 relative left-50 top-10 space-y-2">
                    <span className='text-sm'>© {new Date().getFullYear()} Trip Planner.</span> 
                    <span className='text-sm'>All rights reserved. Designed by MVT</span>
                </div>
            </div>
        </>
    )
}

export default Footer