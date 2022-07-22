import React from 'react'; 
import "./About.css"
import Photo from '../../media/photo.jpg';

const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>Sobre mi</h3>
            <p> Soy estudiante de la escuela Preparatoria "Quimico José Donaciano Morales",
                He participado en concursos de biologia y matematicas, soy muy entuciasta a 
                la hora de aprender cosas nuevas y me mi afisión es la robotica.
            </p>
        </div>
        <div className="about-img">
            <img 
                 src={Photo} alt="about"/>
        </div>  
    </div>
  );
};

export default About