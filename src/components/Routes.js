import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import Listing from "./Listing";
import ListingDetails from "./ListingDetails";
import ListingForm from "./ListingForm";
import Login from "./Login";
import Messages from "./Messages";
import Profile from "./Profile";
import Signup from "./Signup";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/listings">
                <Listing />
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