import axios from 'axios';

const itinerariesActions = {
    getItineraries: (city_id) => {
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/itinerary/" + city_id)
            dispatch({type: "GET_ITINERARY", payload: response.data.response})
        }}
}



export default itinerariesActions;