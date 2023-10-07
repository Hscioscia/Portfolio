import React from 'react';
import './Skills.css';
import ReactIcon from '../../assets/react.png'
import JsIcon from '../../assets/js.png'
import CssIcon from '../../assets/css.png'
import HtmlIcon from '../../assets/html.png'
import SassIcon from '../../assets/sass.png'
import GitIcon from '../../assets/git.png'
import BootstrapIcon from '../../assets/bootstrap.png'
import MaterialIcon from '../../assets/materialui.png'
import FirebaseIcon from '../../assets/firebase.png'
import NodeIcon from '../../assets/nodejs.png'
import UnityIcon from '../../assets/unity.png'
import BlenderIcon from '../../assets/blender.png'

const Skills = () => {
return (
    <section id='skills'>
        <span className='titleSkills'>Sobre Mi</span> <br></br>
        <div className='skillDescription'><p>Como apasionado del desarrollo Frontend, estoy comprometido en expandir mis habilidades y conocimientos más allá de la interfaz de usuario. Actualmente, me estoy capacitando en el Backend con JavaScript para comprender mejor las complejidades de la programación y mejorar mi conjunto de habilidades.</p>
        <p>Siempre he valorado la colaboración y el intercambio de conocimientos. Me encanta estar rodeado de personas que saben del tema, ya que considero que es una forma efectiva de aprender y crecer. Asimismo, disfruto brindar mis conocimientos y ayudar a otros cuando se enfrentan a desafíos en el desarrollo web. Durante mi tiempo como tutor en el curso de JavaScript durante 10 meses en Coderhouse, pude poner en práctica mi deseo de ayudar a los demás, lo que me brindó una valiosa experiencia en la enseñanza y la resolución de problemas.</p>
        <p>Mi objetivo es no solo ser un desarrollador Frontend competente sino también comprender el funcionamiento del Backend para abordar los desafíos de manera más completa y eficaz. Si estás buscando a alguien dedicado, entusiasta, dispuesto a aprender continuamente y que disfruta colaborando con otros, estaré encantado de unirme a tu equipo.</p></div>
        <span className='titleSkills'>Habilidades</span>
        <div className='skillsIcons'>
        <p>En la actualidad, estoy trabajando con las siguientes tecnologías: HTML, CSS, JavaScript y React</p>
            <div className='skillIcon'>
                <img src={HtmlIcon} alt='Html5' className='skillIconImg'></img>
                <img src={CssIcon} alt='Css' className='skillIconImg'></img>
                <img src={JsIcon} alt='Javascript' className='skillIconImg'></img>
                <img src={ReactIcon} alt='React' className='skillIconImg'></img>
            </div>
            <p>También empleo herramientas como Sass, Bootstrap, Material-UI, Git, Firebase, Node.js, entre otras, en mis proyectos de desarrollo.</p>
            <div className='skillIconMisc'>
                <img src={SassIcon} alt='SASS' className='skillIconImgMisc'></img>
                <img src={BootstrapIcon} alt='BOOTSTRAP' className='skillIconImgMisc'></img>
                <img src={MaterialIcon} alt='MATERIAL-UI' className='skillIconImgMisc'></img>
                <img src={GitIcon} alt='GIT' className='skillIconImgMisc'></img>
                <img src={FirebaseIcon} alt='GOOGLE-FIREBASE' className='skillIconImgMisc'></img>
                <img src={NodeIcon} alt='NODE.JS' className='skillIconImgMisc'></img>
            </div>
            <span className='otherSkills'>Desarrollo de Videojuegos</span>
            <div className='skillIconOther'> 
            <img src={UnityIcon} alt='Unity' className='skillIconImg'></img>
            <img src={BlenderIcon} alt='Blender' className='skillIconImg'></img>
            <div className='skillText'>
                    <p>También soy un fanatico de los videojuegos y he completado un curso de desarrollo con Unity y Blender, lo que me ha proporcionado una perspectiva única sobre diseño de interfaces y experiencia del usuario en entornos interactivos.</p>
                </div>
            </div>
        </div>
    </section>
);
}

export default Skills