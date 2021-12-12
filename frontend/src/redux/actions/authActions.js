import axios from "axios"

const authActions = {
    postUser: (name, lastName, email, password, photo, country)=>{
        return async(dispatch, getState)=>{
            try{
                const user = await axios.post("http://localhost:4000/api/auth/signUp",{name, lastName, email, password, photo, country})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({type:'NEW_USER', payload: user.data.response})
                }else{
                    return{errors: user.data.response}
                }
            }catch(error){
                console.log(error)
            }
        }
    },
    signIn: (email,password)=>{
        return async(dispatch, getState)=>{
            try{
                const token = localStorage.getItem('token')
                const user = await axios.post("http://localhost:4000/api/auth/signIn",{email,password}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                console.log(user)
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({type:'USER', payload: user.data.response})
                }else{
                    alert(user.data.error)
                }
            }catch(error){
                console.log(error)
            }
        }
    },
    signInToken: (userToken)=>{
        return async(dispatch, getState)=>{
            try{
            const userToLog = await axios.get("http://localhost:4000/api/auth/signInLS",{
                headers:{
                'Authorization':'Bearer '+ userToken
            }
            })
            if (userToLog.data.success) {
                dispatch({type:"SIGN_IN", payload:{...userToLog.data, token:userToken}})
            }else{
                return(userToLog.data)
            }
        }catch (errores){
            console.log(errores)
            dispatch({type:"SIGN_OUT",payload:{user:null}}) // PORQUE SIGN_OUT
            return("noUser")
        }
        }
    },
    signOut: () => {
        return (dispatch, getState)=>{
            dispatch({type: "SIGN_OUT",payload:{user:null}})
        }
    }
}
export default authActions