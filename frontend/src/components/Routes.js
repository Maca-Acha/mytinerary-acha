import { Switch, Route } from "wouter";
import Home from "../pages/Home";
import Cities from "../pages/Cities"

export default function Routes (){
    return(
        <Switch>
            <Route exact path= "/" component= {Home} />
            <Route path = "/cities" component= {Cities} />
        </Switch>
    )
}
