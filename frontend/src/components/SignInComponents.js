import authActions from '../redux/actions/authActions'
import {connect} from 'react-redux'
import { useRef } from "react"

function SignIn (props) {

    const email = useRef()
    const password = useRef()

    function handleSignUp(e){
        e.preventDefault()
        props.signIn(
            email.current.value,
            password.current.value,
        )
        email.current.value = ""
        password.current.value = ""
    }
    return(
        <div className="box-formulario">
            <form className="formulario" onSubmit={handleSignUp}>
                <div className="inputs">
                    <input type="text" ref={email} className="input" name="email" placeholder="Email"/>
                    <input type="text" ref={password} className="input" name="password" placeholder="Password"/>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <h1>Name: {props.user.name}</h1>
        </div>
    )
}

const mapDispatchToProps = {
    signIn: authActions.signIn
    
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.authReducer.user,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)