import React from 'react'
import Login from './Login_Component/Login'
import Create from './Login_Component/Create'
import Home from './Main_Component/Home'
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {

  const Logined = localStorage.getItem("Login") === "true";

  return (
    <>
      <Routes>
        <Route path='/' element={Logined ? <Navigate to="/home" /> : <Login />} />
        <Route path='/create-account' element={<Create />} />
        <Route path='/home' element={Logined ? <Home /> : <Navigate to="/" />} >
        </Route>
      </Routes>
    </>
  )
}

export default App