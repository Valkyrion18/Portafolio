import React from 'react'

import { H2Styled } from '../styleds/H2Styled';
import { ContainerE, EnterpriseName, FontSize } from '../styleds/ExperienceContainer';

export const Experience = () => {
    return (
            <div>
                <ContainerE>
                    <H2Styled name="Mi Experiencia" />
                    <hr />
                    <EnterpriseName className="Education-item">
                        <FontSize>THOMAS GREG and SONS- <span>2020 - 2021</span>
                            <p>Técnico de Mantenimiento</p>
                        </FontSize>
                    </EnterpriseName>
                </ContainerE>
            </div>
    )
}