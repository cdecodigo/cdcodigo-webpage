import React from 'react';
import CompaEditor from 'react-compa';

const htmlIntro = `
<h1>Este es un titulo</h1>
<p>Este es un parrafo/>
`

const Introduccion = () => (
    <div style={{textAlign: 'center'}}>
        <h1>MODULO 1 HTML</h1>
        <p>HTML es un lenguaje de marcado estandar de la web.</p>
        <p>Con HTML tu puedes Crear tu Propia pagina web.</p>
        <p>HTML es muy facil de aprender - lo disfrutaras.</p>
        <br></br><br></br>
        <p>En el editor podemos ver un codigo html de ejemplo, preciona el boton verde para ver lo que pasa:</p>
        <CompaEditor html={htmlIntro}/>
    </div>
    
);

export default Introduccion;