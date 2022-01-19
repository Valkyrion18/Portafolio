import React from "react";
// import '../styles/About.css';

import { AboutAvatar, AboutH2, AboutImg, AboutLocation, AboutName, AboutProfession, AboutSN } from '../styleds/AboutStyled'

const About = () => {
    return (
        // <AboutStyle className="About">
        <div>
            <div className="About-container">
                <AboutAvatar className="About-avatar">
                    <figure>
                        <AboutImg src="https://img1.freepng.es/20180412/uhe/kisspng-female-silhouette-clip-art-user-avatar-5acfd8e8135ac4.0054231115235709200793.jpg" alt="Mi Avatar" />
                    </figure>
                </AboutAvatar>
                <AboutName className="About-name">
                    <AboutH2>José Andrés Sánchez</AboutH2>
                </AboutName>
                <AboutProfession className="About-profession">
                    <p>Ingeniero Electrónico</p>
                </AboutProfession>
                <AboutLocation className="About-description">
                    <p>Manizales, Colombia</p>
                </AboutLocation>
                <div className="About-social">
                    <AboutSN src="https://www.audienciaelectronica.net/wp-content/uploads/2016/03/redes-sociales-consumo.png" alt="Barra Redes Sociales"/>
                </div>
            </div>
        </div>
        // </AboutStyle>

    )
}

export default About