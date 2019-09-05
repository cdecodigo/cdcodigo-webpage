import React from 'react';
import CompaEditor from 'react-compa';

const html = 
`   
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
`;
const Basics = () => (
    <div style={{textAlign: 'center'}}>
        <h1>Reglas basicas</h1>
        <p>Todos los documentos HTML empiezan con la declaracion de tipo: <code>&lt;!DOCTYPE html></code>.</p>
        <p>
        El Documento HTML empieza con <code>&lt;html></code> y termina con<code> &lt;/html></code>
        </p>
        <p>
        La parte visible de un documento HTML esta entre <code>&lt;body></code> y <code>&lt;/body></code>.
        </p>
        <CompaEditor html={html} />
    </div>
);

export default Basics;