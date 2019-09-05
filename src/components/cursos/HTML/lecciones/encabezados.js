import React from 'react';
import CompaEditor from 'react-compa';

const html = 
`
<h1>Soy un encabezado h1</h1>
<h2>Soy un encabezado h2</h2>
<h3>Soy un encabezado h3</h3>
<h4>Soy un encabezado h4</h4>
<h5>Soy un encabezado h5</h5>
<h6>Soy un encabezado h6</h6>
`;

const Encabezados  = () => (
    <div style={{textAlign: 'center'}}>
        <h1>Encabezados</h1>
        <p>
            Los encabezados se definen con las etiquetas &lt;h1> asta &lt;h6>.
        </p>
        <p>
            <code>&lt;h1></code> define el encabezado mas importante.
        </p>
        <p>
            <code>&lt;h6></code> define el encabezado menos importante.
        </p>
        <p>
            Los encabezados tienen estilos de tamaño por defecto, corre el editor para ver el resultado:
        </p>
        <CompaEditor html={html}/>
    </div>
);

export default Encabezados;