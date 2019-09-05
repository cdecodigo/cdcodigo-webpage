import React from 'react';
import { withAuthorization } from '../Session';

import { HtmlBaner } from '../cursos/HTML';

const HomePage = () => (
    <div style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        background: '#FCD712',
        height: '98vh'
    }}>
        <h1>Unidades</h1>
        <p>The home page is accessible by every signed in user</p>

        <HtmlBaner />
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);