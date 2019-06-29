import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/routes';

import { AuthUserContext } from '../Session';

import './index.css';

const Navigation = () => (
    <div id="navigation">

    <div className="profile">
        <img src="/cdecodigo.jpg"/>
        <h1>c de codigo</h1>
    </div>
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>
    </div>
)

const NavigationAuth = ({ authUser }) => {
    return(
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            {authUser.roles[ROLES.ADMIN] && (
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
            )}
            <li>
                <SignOutButton />
            </li>
        </ul>
    )
    
};

const NavigationNonAuth = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;