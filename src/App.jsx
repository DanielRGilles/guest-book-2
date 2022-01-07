import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import GuestBook from "./views/GuestBook";
import Login from './views/Login'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
     <Header />
        <Switch>
           <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/guest-book">
            <GuestBook />
          </PrivateRoute>
        </Switch>
        <Footer />
    </Router>
  );
}
