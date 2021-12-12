import authActions from '../redux/actions/authActions'
import {connect} from 'react-redux'
import { useRef } from "react"

function SignUp (props) {
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
            <form className="formulario" onSubmit={handleSignUp}>
                <div className="inputs">
                    <input type="text" ref={name} className="input" name="name" placeholder="Name"/>
                    <input type="text" ref={lastName} className="input" name="lastName" placeholder="Last Name" />
                    <input type="text" ref={email} className="input" name="email" placeholder="Email"/>
                    <input type="text" ref={password} className="input" name="password" placeholder="Password"/>
                    <input type="text" ref={photo} className="input" name="photo" placeholder="URL de la foto"/>
                    <select ref={country} className="input">
                        <option value="Argentina">Argentina</option>
                        <option value="Uruguay">Uruguay</option>
                        <option selected value="Brasil">Brasil</option>
                        <option value="Paraguay">Paraguay</option>
                    </select>
                </div>
                <input type="submit" value="Submit" />
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