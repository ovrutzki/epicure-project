import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './LogIn.css'

 const LogIn:React.FC = () => {
    const navigate = useNavigate()
    const [email,setEmail]:[string, Dispatch<SetStateAction<string>>] = useState("")
    const [password,setPassword]:any = useState("")
    
    const [black,setBlack]:[string, Dispatch<SetStateAction<string>>] = useState("")
    const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const passwordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    useEffect(() => {
        if (password != "" && email != ""){
            setBlack("black-style")
        } else {
            setBlack("")
        }
    },[email, password])


  return (
    <>
    <Navbar />
    <div id='login-container'>
    <div id='login-main'>
        <div id='title'>
        <h1>Log in</h1>
        <h2>To continue the order, please sign in</h2>
        </div>
        <form id='login-details' action="">
            <input onChange={emailOnChange} type="text" name='email' placeholder='Email address' />
            <input onChange={passwordOnChange} type="password" name='password' placeholder='Password' />
            <button className='login-btn' id={black} type='submit'>LOGIN</button>
            <p>Forget password?</p>
        </form>
        <section>
        <hr /><p>or</p> <hr />
        </section>
        <button onClick={() => navigate("/sign-in")} id='sign-in-btn'>SIGN UP</button>
    </div>
    </div>
      <Footer />
    </>
  )
}

export default LogIn