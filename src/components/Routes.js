import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import ListingContainer from "./ListingContainer";
import ListingDetails from "./ListingDetails";
import ListingForm from "./ListingForm";
import Login from "./Login";
import MessagesContainer from "./MessagesContainer";
import Profile from "./Profile";
import Signup from "./Signup";

/** Routes
 * 
 *  App -> Routes -> { Homepage, Login, Signup, ListingContainer, 
 *                     ListingForm, ListingDetails, MessagesContainer,
 *                     Profile }
 */

function Routes( {login, signUp, logout} ) {
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
                <MessagesContainer />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;