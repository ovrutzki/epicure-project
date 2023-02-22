import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './SignIn.css'

 const SignIn:React.FC = () => {

  return (
    <>
    <Navbar />
    <div id='sing-container'>
    <div id='signin-main'>
        <div id='title'>
        <h1>Sign in</h1>
        <h2>To continue the order, please sign in</h2>
        </div>
        <form id='sign-details' action="">
            <input type="text" name='email' placeholder='Email address' />
            <input type="password" name='password' placeholder='Password' />
            <button id='login-btn' type='submit'>LOGIN</button>
            <p>Forget password?</p>
        </form>
        <section>
        <hr /><p>or</p> <hr />
        </section>
        <button id='sign-in-btn'>SIGN UP</button>
    </div>
    </div>
      <Footer />
    </>
  )
}

export default SignIn