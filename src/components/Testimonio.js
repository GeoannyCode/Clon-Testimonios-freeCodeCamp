import React from 'react';

export function Testimonio() {
    return(
        <div className='contenedor-testimonio'>
            <img
             className='imagen-testimonio'
             src={require('../imagenes/emma.png')}
             alt='Foto de Emma' 
             />
             <div className='contenedro-texto-testimonio'>
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonio'>Software Engineer at Spotify</p>
                <p className='Texto-testimonio'>
                    "I've always struggled with learning 
                    JavaScript. I've taken many courses but freeCodeCamp's course was the 
                    one which stuck. Studying JavaScript as well as data structures and 
                    algorithms on freeCodeCamp gave me the skills and confidence I needed to l
                    and my dream job as a software engineer at Spotify."
                </p>
             </div>
        </div>
    );
} 

