import React from 'react';

import { SignOutPowerButtom } from '../SignOut'

import styles from './topBaner.module.sass';

const TopBaner = () => {

    const authUser = JSON.parse(localStorage.getItem('authUser'));
    console.log('top baner', JSON.parse(localStorage.getItem('authUser')));
    console.log('styles', styles)

    return (
        // <div className="profile">
        <div className={styles.topBaner}>
            <img src="/cdecodigo.jpg"/>
            <h1>c de codigo</h1>
            <SignOutPowerButtom />
        </div>
    )
}

export default TopBaner;