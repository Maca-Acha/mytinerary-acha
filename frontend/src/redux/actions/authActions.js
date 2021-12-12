import axios from "axios"

const authActions = {
    postUser: (name, lastName, email, password, photo, country)=>{
        return async(dispatch, getState)=>{
            try{
                const user = await axios.post("http://localhost:4000/api/auth/signUp",{name, lastName, email, password, photo, country})
                if(user.data.success && !user.data.error){
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
                const user = await axios.post("http://localhost:4000/api/auth/signIn",{email,password})
                if(user.data.success && !user.data.error){
                    dispatch({type:'USER', payload: user.data.response})
                }else{
                    alert(user.data.error)
                }
            }catch(error){
                console.log(error)
            }
        }
    },
}
export default authActions