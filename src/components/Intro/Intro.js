import React from 'react';
import './Intro.css';
import { Fade, JackInTheBox } from "react-awesome-reveal"
import { Link } from 'react-scroll';
import cvImg from '../../assets/cv.png'
import arrowImg from '../../assets/arrow.jpg'



const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <Fade delay={40e1} cascade damping={10e-1} triggerOnce>
                    <span className="hello">Hola, </span>
                    <span className="introText">
                        soy <span className="introName">Hernan Scioscia</span> <br /> Frontend Developer
                    </span>
                </Fade>
                <Fade cascade delay={180e1} triggerOnce>
                    <p className="introP">Un apasionado de la programación, los videojuegos y la música.</p>
                    <p className="introP2"> Mi objetivo profesional es desarrollar mi carrera como Frontend Developer,</p>
                    <p className="introP3"> manteniéndome al día con las nuevas tecnologías y buscando constantemente mejorar mis habilidades.</p>
                </Fade>
                <div className="cardCv">
                <Fade cascade delay={320e1} triggerOnce>
                <button className='cvBtn'> <img src={cvImg} alt='CV' className='cv'/> </button>
                </Fade>
                </div>
                <Fade cascade delay={330e1} triggerOnce>
                <img src={arrowImg} alt='Flecha' className='arrow'/>
                </Fade>
                <Fade cascade delay={340e1} triggerOnce>               
                <JackInTheBox delay={380e1} triggerOnce duration={2000}><span className='arrowText'>Descarga mi CV</span></JackInTheBox>
                </Fade>
            </div>
            <Fade cascade delay={350e1} triggerOnce>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                <div className="scroll-down"></div>
                </Link>
            </Fade>
        </section>
    );
}

export default Intro;
