import { auth } from './firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const login =event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=> {
            //redirect to home page
              history.push("/");
        }).catch(e=> alert(e.message));
    }
      const register = (event) => {
        event.preventDefault();
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            //redirect to home page
            history.push("/")
          })
          .catch((e) => alert(e.message));
      };
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://montgomeryplanning.org/wp-content/uploads/2018/11/logo-amazon.png"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5> <input value={email} onChange={event =>setEmail(event.target.value)}type="email" />
            <h5>Password</h5> <input value={password} onChange={event=> setPassword(event.target.value)} type="password" />
          </form>
            <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
          <p>
            {" "}
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={register} className="login__registerButton"> Create an Account</button>
        </div>
      </div>
    );
}

export default Login
