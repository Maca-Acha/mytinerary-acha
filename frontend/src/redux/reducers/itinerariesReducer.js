const initialState = {
    state:[],
    itineraries: [],
}

const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {  
        case 'GET_ITINERARY':
            return{
                ...state,
                itineraries: action.payload
            }
        case 'GET_LIKES':
            return{
                ...state,
                itineraries: action.payload
            } 
            default: return state
        
    }
}

export default itinerariesReducer
