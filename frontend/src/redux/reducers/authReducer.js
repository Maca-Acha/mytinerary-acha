const initialState ={
    state:[],
    newUser:{},
    user:{}
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'NEW_USER':
            return{
                ...state,
                newUser: action.payload
            }
        case 'USER':
            return{
                ...state,
                user: action.payload
            }
            default: return state
    }
}

export default authReducer