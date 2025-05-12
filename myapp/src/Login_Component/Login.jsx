import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const LoginImage = "https://images.unsplash.com/photo-1585645909732-7bf0ceb138e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyYXZlbHxlbnwwfDJ8MHx8fDA%3D";

    const defaultValues = { Email_Id: "", Password: "" }

    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    const [userLogin, setUserLogin] = useState(defaultValues);

    const storedEmail = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("Password");

    const handleVisible = () => {
        setVisible(!visible);
    }

    const handleContinue = () => {

        if (userLogin.Email_Id === "" && userLogin.Password === "") {
            alert("Enter the Required Fields First !!!");
        }
        else {
            if(storedEmail === userLogin.Email_Id && storedPassword === userLogin.Password){
                localStorage.setItem("Login", "true")
                window.location.href = "/home"
            }
            else{
                alert("Invalid Credinalts");
            }
        }

    }

    return (
        <>
            <div className='bg-black min-h-screen flex flex-row items-center space-x-50'>
                <div>
                    <img
                        className='w-[750px] max-h-screen'
                        src={LoginImage}
                        alt=''
                    />
                </div>
                <div className='bg-white h-[420px] w-1/4 rounded-2xl flex flex-col items-center'>
                    <span className='text-2xl font-bold uppercase mt-10 underline underline-offset-4'>Log In</span>
                    <div className='mt-12 flex flex-col space-y-6 items-center'>
                        <div>
                            <input
                                type='text'
                                className='border-2 rounded-md w-[300px] h-12 pl-4 text-base'
                                placeholder='UserName'
                                value={userLogin.Email_Id}
                                onChange={(e) => setUserLogin({ ...userLogin, Email_Id: e.target.value })}
                            />
                        </div>
                        <div>
                            <div className='flex items-center justify-center'>
                                <input
                                    type={visible ? "password" : "text"}
                                    className='border-2 rounded-md w-[300px] h-12 pl-4 text-base'
                                    placeholder='Password'
                                    value={userLogin.Password}
                                    onChange={(e) => setUserLogin({ ...userLogin, Password: e.target.value })}
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
                        className='border-2 rounded-xl px-20 py-2 cursor-pointer bg-green-400 font-semibold'
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                    <span className='mt-4'>New User ?</span>
                    <button
                        className='text-blue-800 font-semibold cursor-pointer mt-2 underline underline-offset-4 text-base'
                        onClick={() => navigate("/create-account")}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login