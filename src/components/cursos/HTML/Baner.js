import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../../constants/routes';

import styles from './baner.module.sass';

const HtmlBaner = () => (
    <div className={styles.htmlBaner}>
        <spam>&lt;body&gt;</spam>
        <div className={styles.body}>
            <div className={styles.imagen}>
                <spam>&lt;img&gt;</spam>
                <img src={require('./html-5.svg')}/>
                <spam>&lt;/img&gt;</spam>
            </div>
            
            <div className={styles.content}>
                
                <p><spam>&lt;p&gt;</spam> Html es el esqueleto de la web spokky <spam>&lt;p&gt;</spam></p>

                <p><spam>&lt;p&gt;</spam> Aprende la estructura de la web! <spam>&lt;p&gt;</spam></p>
                
                <Link to={ROUTES.HTMLCURSO}>
                    <spam>&lt;button&gt;</spam>
                        <button>Iniciar Ya!</button>
                    <spam>&lt;button&gt;</spam>    
                </Link>
            </div>
        </div>
        <spam>&lt;/body&gt;</spam>
    </div>
);

export default HtmlBaner;