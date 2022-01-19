import React from 'react'

import { H2Styled } from '../styleds/H2Styled';
import { ContainerC, InstitutionName, FontSize } from '../styleds/CertificationsContainer';

export const Certification = () => {
    return (
            <div>                
                <ContainerC>
                    <H2Styled name="Mis Certificaciones" />
                    <hr />
                    <InstitutionName className="Education-item">
                        <FontSize><span>MisionTIC2022</span>
                            <p>Certificacion en Python y Java</p>
                        </FontSize>
                    </InstitutionName>
                </ContainerC>                
            </div>
    )
}