
import './App.css';
import {Testimonio} from  './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          image='shawn'
          name='Shawn Wang'
          country='Singapur'
          position='Ingeniero de Software'
          company='Amazon'
          testimony='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />

        <Testimonio 
          image='sarah'
          name='Sarah Chima'
          country='Nigeria'
          position='Ingeniera de Software'
          company='ChatDesk'
          testimony='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />

        <Testimonio 
          image='emma'
          name='Emma Bostian'
          country='Sweden'
          position='Software Engineer'
          company='Spotify'
          testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
      </div>
    </div>
  );
}

export default App;
