// import React, { useState } from 'react';
//  import './Login.css'
// function Login(props) {
//   const username = useFormInput('');
//   const password = useFormInput('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
 
//   // handle button click of login form
//   const handleLogin = () => {
//     props.history.push('/dashboard');
//   }
 
//   return (
//     <div className="login-container">
//       Login
//       <br/><br/>
//       <div className="login-components"> 
//         Username<br/>
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password<br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
//     </div>
//   );
// }
 
// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
 
//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }
 
// export default Login;

import React ,{ useState} from 'react'
import {Link } from 'react-router-dom';
import "./Login.css";
import urban_dictionary from './urban_dictionary.png'
import Firebase from './firebase/index'

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const signIn= e=>{
        e.preventDefault();
        //firebase stuff
        Firebase.doSignInWithEmailAndPassword(email, password);

    }

    const register= e=>{
        e.preventDefault();
        //firebase stuff

        //  auth.createUserWithEmailAndPassword(email, password)
        // .then(auth=>{   
        //     console.log(auth);
        // })
        // .catch(error=> console.log(error.message))
        Firebase.doCreateUserWithEmailAndPassword(email,password)

    }
    return (
        <div class="body">
        <div className="login__body">
        <Link to="/search">
            <img 
            className="login__logo"
            src ={urban_dictionary}
            alt="logo here"/>
            </Link>
            <div className="login">
            <div className="login__container">
            
            <br></br>
                
                <form>
                <h1 className="sign_in">SignIn</h1>
                
                    <h5>Enter the Email</h5>
                    <input type="e-mail" value={email} 
                    onChange={
                                e=>{setemail(e.target.value)
                                console.log(e.target.value)}}/> 

                    <h5>Enter the Password </h5>
                    <input type="password" value={password}
                    onChange={
                            e=>{setpassword(e.target.value)}}/> 

                <button className="login__signInButton" onClick={signIn}> SignIn</button>
                

                </form>
                <p align='center'>
                    Did not have an account?
                    register
                </p>
                <button className="login__registerButton" onClick={register}> Create your account</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;
