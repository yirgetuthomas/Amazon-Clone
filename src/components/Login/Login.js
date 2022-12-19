import React, { useState } from 'react'
import { auth } from '../../firebase'
import {Link, useNavigate} from 'react-router-dom';
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEemail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
        navigate('/', {replace: true})
    })
    .catch(err => {
       alert(err.message)
    })
  }

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
        if (auth){
            navigate('/', {replace: true});
        }
    }).catch(err => {
        alert(err.message)
    })
    
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          {/* event.preventDefault() */}
          <h5>E-mail</h5>
          <input
            type="text"
            defaultValue={email}
            onChange={(e) => setEemail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signInBtn" onClick={signIn}>
            Sign In
          </button>
          <p>
            by signing in you agree to amazon condition of use and sale.Please
            see our privacy notice, our cookies notice and our interest based ad
            notice.
          </p>
          <button className="login__registerBtn" onClick={register}>
            create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
