import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose } from 'recompose'; 

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication, withStats } from '../Session';

const routes = [
    {
        path: ROUTES.LANDING,
        exact: true,
        component: LandingPage,
    },
    {
        path: ROUTES.SIGN_UP,
        component: SignUpPage,
    },
    {
        path: ROUTES.SIGN_IN,
        component: SignInPage,
    },
    {
        path: ROUTES.PASSWORD_FORGET,
        component: PasswordForgetPage,
    },
    {
        path: ROUTES.HOME,
        component: HomePage,
    },
    {
        path: ROUTES.ACCOUNT,
        component: AccountPage,
    },
    {
        path: ROUTES.ADMIN,
        component: AdminPage,
    }
]

const App = () => (
    <Router>
        <Navigation />

        <div id="content">
            {routes.map((route, index) => 
                <Route key={index} path={route.path} exact={route.exact} component={route.component}/> 
            )}      
        </div>
        
    </Router>
    
);

// export default compose(withAuthentication, withStats)(App);
export default withAuthentication(App);