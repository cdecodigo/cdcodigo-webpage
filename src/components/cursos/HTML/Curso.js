import React from 'react';
import Classroom from 'mr-classroom-react';

import { Introduccion, Basics, Encabezados, Vision } from './lecciones';

const lessons = [
    {title: 'Introducción', view: Introduccion},
    {title: 'Reglas basicas', view: Basics},
    {title: 'Encabezados', view: Encabezados},
    {title: 'Vision', view: Vision }
]

const Curso = () => {
    return (
        <Classroom lessons={lessons}/>
    )
};

export default Curso;