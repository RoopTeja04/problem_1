import React, { useState } from 'react';
import { motion } from "framer-motion";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const LoginImage = "https://images.unsplash.com/photo-1585645909732-7bf0ceb138e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyYXZlbHxlbnwwfDJ8MHx8fDA%3D";

    const defaultValues = { Email_Id: "", Password: "" }

    const navigate = useNavigate();

    const [visible, setVisible] = useState(true);
    const [userLogin, setUserLogin] = useState(defaultValues);

    const storedEmail = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("Password");

    const handleVisible = () => {
        setVisible(!visible);
    }

    const handleContinue = () => {
        if (userLogin.Email_Id === "" && userLogin.Password === "") {
            alert("Enter the Required Fields First !!!");
        } else {
            if (storedEmail === userLogin.Email_Id && storedPassword === userLogin.Password) {
                localStorage.setItem("Login", "true")
                window.location.href = "/home"
            } else {
                alert("Invalid Credentials");
            }
        }
    }

    return (
        <div className='bg-black min-h-screen flex flex-row items-center space-x-64'>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    className='w-[750px] max-h-screen opacity-65'
                    src={LoginImage}
                    alt='login'
                />
            </motion.div>

            <motion.div
                className='bg-gray-300 h-[420px] w-1/4 rounded-2xl flex flex-col items-center'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <motion.span
                    className='text-2xl font-bold uppercase mt-10 underline underline-offset-4'
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Log In
                </motion.span>

                <div className='mt-12 flex flex-col space-y-6 items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                    >
                        <input
                            type='text'
                            className='border-2 rounded-md w-[300px] h-12 pl-4 text-base font-semibold'
                            placeholder='UserName'
                            value={userLogin.Email_Id}
                            onChange={(e) => setUserLogin({ ...userLogin, Email_Id: e.target.value })}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        <div className='flex items-center justify-center'>
                            <input
                                type={visible ? "password" : "text"}
                                className='border-2 rounded-md w-[300px] h-12 pl-4 text-base font-semibold'
                                placeholder='Password'
                                value={userLogin.Password}
                                onChange={(e) => setUserLogin({ ...userLogin, Password: e.target.value })}
                            />
                        </div>
                        <button
                            className='cursor-pointer relative z-10 left-64 bottom-9'
                            onClick={handleVisible}
                        >
                            {visible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                        </button>
                    </motion.div>
                </div>

                <motion.button
                    className='border-2 rounded-xl px-20 py-2 cursor-pointer bg-green-400 font-semibold mt-2'
                    onClick={handleContinue}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "tween", stiffness: 400 }}
                >
                    Continue
                </motion.button>

                <motion.span
                    className='mt-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    New User ?
                </motion.span>

                <motion.button
                    className='text-blue-800 font-semibold cursor-pointer mt-2 underline underline-offset-4 text-base'
                    onClick={() => navigate("/create-account")}
                    whileHover={{ scale: 1.05 }}
                >
                    Create Account
                </motion.button>
            </motion.div>
        </div>
    );
}

export default Login;