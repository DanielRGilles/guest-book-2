import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import GuestBook from "./views/GuestBook";
import Login from './views/Login'
import Layout from "./views/Layout";

export default function App() {
  return (
    <Router>
      <div>
     <Layout />
        <Switch>
           <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/guest-book">
            <GuestBook />
          </PrivateRoute>
         
        </Switch>
        
      </div>
    </Router>
  );
}
