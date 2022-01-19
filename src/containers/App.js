import React from "react"
import styled from "styled-components"
import About from "../components/About"
import { Education } from "../components/Education"
import { Experience } from "../components/Experience"
import { Certification } from "../components/Certifications"
import { Skill } from "../components/Skills"

const GlobalContainer = styled.div`   
    margin: 0;
    height: 100vh;
    font-family: system-ui;
    color: #f2f5ff;
    text-shadow: 1px 1px rgba(0,0,0,.5);    
`
const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
`

const AboutContainer = styled.div`
    text-align: center;
    margin: auto;
    font-size: 20px;
`

const ProfileContainer = styled.div`
    text-align: "center";
    height: fit-content;
    font-size: 12px;
    margin: auto;
`;

export const App = () => {
    return (        
        <GlobalContainer>
            <MainContainer>
                <AboutContainer>
                    <About/>
                </AboutContainer>
                <ProfileContainer>
                    <Education/>
                    <Experience/>
                    <Certification/>
                    <Skill/>
                </ProfileContainer>                
            </MainContainer>
        </GlobalContainer>
    )
}
