import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const Bg_Image = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const [visible, setVisible] = useState(false);
    const [msg, setMsg] = useState("");

    const defaultValues = { Email_Id: "", Password: "" }

    const [userCreate, setUserCreate] = useState(defaultValues);

    const navigate = useNavigate();

    const handleVisible = () => {
        setVisible(!visible);
    }

    const handleCreate = () => {

        const trimmedUser = userCreate.Email_Id.trim();
        const trimmedPassword = userCreate.Password.trim();

        if (trimmedUser === "" && trimmedPassword === "") {
            alert("Enter the Required Fields");
        }
        else {
            localStorage.setItem("userName", userCreate.Email_Id);
            localStorage.setItem("Password", userCreate.Password);

            setMsg("Your Account is Created Successfully!");
            setTimeout(() => {
                navigate("/")
            }, 2000)
        }

    }

    return (
        <>
            <div className='relative h-screen'>
                <img src={Bg_Image} alt=''
                    className='absolute inset-0 w-full h-full object-cover z-0'
                />
            </div>

            <div className='absolute inset-0 bg-black/50 z-2'></div>

            <div className='absolute z-10 top-0 left-[35%] flex items-center justify-center h-full'>
                <div className='backdrop-blur-xl bg-black/60 p-10 rounded-2xl text-white py-6 px-20 flex flex-col items-center'>
                    <h1 className='text-4xl font-bold underline underline-offset-6 mt-4 tracking-wider'>Welcome to Our App</h1>
                    <div className='flex flex-col items-center'>
                        <div className='mt-8 flex flex-col space-y-8 items-center'>
                            <div>
                                <input
                                    className='border-2 rounded-md w-[300px] h-12 pl-4 text-base outline-none font-semibold'
                                    type='text'
                                    placeholder='UserName'
                                    value={userCreate.Email_Id}
                                    onChange={(e) => setUserCreate({ ...userCreate, Email_Id: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <div>
                                    <input
                                        className='border-2 rounded-md w-[300px] h-12 pl-4 text-base outline-none font-semibold'
                                        type={visible ? "password" : "text"}
                                        placeholder='Password'
                                        value={userCreate.Password}
                                        onChange={(e) => setUserCreate({ ...userCreate, Password: e.target.value })}
                                        required
                                    />
                                </div>
                                <button
                                    className='cursor-pointer relative z-10 left-64 bottom-9'
                                    onClick={handleVisible}
                                >
                                    {
                                        visible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />
                                    }
                                </button>
                            </div>
                        </div>
                        <button
                            className='bg-green-700 px-10 py-2 cursor-pointer text-lg font-semibold tracking-wider rounded-lg'
                            onClick={handleCreate}
                        >
                            Create Account
                        </button>
                        <span className='mt-4 font-medium tracking-wider'>Already User?</span>
                        <button
                            className='text-blue-700 font-semibold cursor-pointer my-2 underline underline-offset-4 text-base tracking-wide'
                            onClick={() => navigate("/")}
                        >
                            Login
                        </button>
                        <p className='text-green-600 text-xl font-semibold tracking-wider'>{msg}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create