import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import City from "../pages/City"

function RoutesManager (){
    return(
        <Routes>
            <Route path= "/" element= {<Home />} />
            <Route path = "/cities" element= {<Cities />} />
            <Route path = "/city/:id" element={<City />} />
        </Routes>
    )
}
export default RoutesManager