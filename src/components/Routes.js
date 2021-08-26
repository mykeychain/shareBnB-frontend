import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import ListingContainer from "./ListingContainer";
import ListingDetails from "./ListingDetails";
import ListingForm from "./ListingForm";
import Login from "./Login";
import Messages from "./Messages";
import Profile from "./Profile";
import Signup from "./Signup";

function Routes( {login, signUp} ) {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/login">
                <Login login={login}/>
            </Route>
            <Route exact path="/signup">
                <Signup signUp={signUp} />
            </Route>
            <Route exact path="/listings">
                <ListingContainer />
            </Route>
            <Route exact path="/listings/add">
                <ListingForm />
            </Route>
            <Route exact path="/listings/:id">
                <ListingDetails />
            </Route>
            <Route exact path="/messages">
                <Messages />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;