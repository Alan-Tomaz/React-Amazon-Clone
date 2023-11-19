import React, { useState } from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault()
    }

    const register = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <Link to="/">
                <img src="https://i.imgur.com/ofkgbNC.png" className='login__logo' />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login__signInButton' type='submit' onClick={signIn()}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based ADS Notice.
                </p>

                <button className='login__registerButton' onClick={register()}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login