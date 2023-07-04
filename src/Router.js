import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Details from './containers/Details'
import Listing from './containers/Listing'
import cookie from 'cookie'
import Login from './containers/Login'
import AddListing from './containers/AddListing'


// import Dashboard from './containers/Dashboard'
// import Import from './containers/Import'
// import Switch from 'react-router'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

//   Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return (
        checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    )

}


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Listing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/add" element={<ProtectedRoute component={AddListing} />} />
            {/* <Route path="/import" component={Import} /> */}
        </Routes>
    );
};

export default Router;