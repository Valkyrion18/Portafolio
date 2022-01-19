import React from 'react'

import { H2Styled } from '../styleds/H2Styled';
import { ContainerS, Distribution, FontSize, StyleInput } from '../styleds/SkillsContainer';

export const Skill = () => {
    return (
        <div>
            <ContainerS>
                <H2Styled name="Mis Habilidades" />
                <hr />
                <Distribution className="Skills-item">
                    <div>
                        <FontSize>Python</FontSize>
                        <StyleInput>
                            <input type="range" className="rangoSkill-1" min="0" max="100" value="70" disabled/>
                        </StyleInput>
                    </div>
                    <div>
                        <FontSize>Java</FontSize>
                        <StyleInput>
                            <input type="range" className="rangoSkill-2" min="0" max="100" value="40" disabled/>
                        </StyleInput>
                    </div>
                    <div>
                        <FontSize>JavaScript</FontSize>
                        <StyleInput>
                            <input type="range" className="rangoSkill-3" min="0" max="100" value="70" disabled/>
                        </StyleInput>
                    </div>
                    <div>
                        <FontSize>HTML</FontSize>
                        <StyleInput>
                            <input type="range" className="rangoSkill-4" min="0" max="100" value="60" disabled/>
                        </StyleInput>
                    </div>
                </Distribution>
            </ContainerS>
        </div>
    )
}