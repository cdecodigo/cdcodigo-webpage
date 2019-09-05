import React from 'react';

import './index.css';

const LandingPage = () => (
    <div className="landing-page">
        <div id="mision">
            <div>
            <h1>Nosotros enseñamos código. </h1>
            <h2>cdc:~$ Queremos aumentar e impulsar la comunidad STEM de jóvenes en Sonora. </h2>
            <p>cdc:~$ C de Código busca que los jóvenes sonorenses tengan al alcance las herramientas tecnológicas que les permitan un desarrollo académico y profesional. </p>
            </div>
            
            
        </div>
        <div>
            <img className="portail" src={require('./jsTraining.jpg')} alt="entrenamiento js 2018" />
            <img className="portail" src={require('./alumnos.jpg')} alt="alumnos cdecodigo" />
            <img className="portail" style={{border: 'none'}} src={require('./code_review.svg')} alt="code review" />
        </div>
        
    </div>
);

export default LandingPage;