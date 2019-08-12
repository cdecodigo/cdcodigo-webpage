import React from 'react';
import { withAuthorization } from '../Session';

import { HtmlBaner } from '../cursos/HTML';

const HomePage = () => (
    <div style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center'
    }}>
        <h1>Home Page</h1>
        <p>The home page is accessible by every signed in user</p>

        <HtmlBaner />
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);