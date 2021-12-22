import axios from 'axios'
import {toast} from 'react-toastify'

const itinerariesActions = {
    getItineraries: (city_id) => {
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/itinerary/" + city_id)
            dispatch({type: "GET_ITINERARY", payload: response.data.response})
        }
    },
    likes: (userId, itineraryId, city_id) => {
        return async (dispatch, getState) => {
            if(userId && itineraryId){
                let likes = await axios.put("http://localhost:4000/api/like/", {userId, itineraryId} )
                let response = await axios.get("http://localhost:4000/api/itinerary/" + city_id)
                dispatch({type: "GET_LIKES", payload: response.data.response})
            }else{
                toast.warning( "You need to sign in", {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    },
    getComments: (itineraryId) => {
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/comments/" + itineraryId)
            dispatch({type: "GET_COMMENTS", payload: response.data.response })
            
        }
    }
}

export default itinerariesActions;