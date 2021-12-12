import authActions from '../redux/actions/authActions'
import {connect} from 'react-redux'
import { useRef } from "react"
import countries from './Countries'
import React from 'react';
import { GoogleLogin } from 'react-google-login';



function SignUp (props) {
    const responseGoogle = (response) => {
        console.log(response);
    }

    const name = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const photo = useRef()
    const country = useRef()

    function handleSignUp(e){
        e.preventDefault()
        props.postUser(
            name.current.value,
            lastName.current.value,
            email.current.value,
            password.current.value,
            photo.current.value,
            country.current.value,
        )
        name.current.value = ""
        lastName.current.value = ""
        email.current.value = ""
        password.current.value = ""
        photo.current.value = ""
        country.current.value = ""
    }

    return(
        <div className="box-formulario">
            <h2>Create an account</h2>
            <p>Do you already have an account? Log in</p>
            <form className="formulario" onSubmit={handleSignUp}>
                <div className="inputs">
                    <label htmlFor='name'>Name</label>
                    <input type="text" ref={name} className="input" name="name" placeholder="Name"/>
                    <input type="text" ref={lastName} className="input" name="lastName" placeholder="Last Name" />
                    <input type="text" ref={email} className="input" name="email" placeholder="Email"/>
                    <input type="password" ref={password} className="input" name="password" placeholder="Password"/>
                    <input type="text" ref={photo} className="input" name="photo" placeholder="URL de la foto"/>
                    <select ref={country} className="input">
                        {countries.sort().map(country =>{
                            return(
                                <option value="country" className='color-pais'>{country}</option>
                            )
                        })}
                    </select>
                </div>
                <input type="submit" value="Submit" />

                <GoogleLogin
                    clientId="113911854537-8j68k30a4qpl884ffcvk7hvdfmsdlfnc.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    postUser: authActions.postUser
    
}

const mapStateToProps = (state) => {
    return {
        newUser: state.authReducer.newUser,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)