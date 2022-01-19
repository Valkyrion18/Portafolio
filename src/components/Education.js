import React from 'react'

import { H2Styled } from '../styleds/H2Styled';
import { Container, InstitutionName, FontSize } from '../styleds/EducationContainer';

export const Education = () => {
    return (
            <div>
                <Container>
                    <H2Styled name="Mis Estudios" />
                    <hr />
                    <InstitutionName className="Institution-item">
                        <FontSize>Universidad Autónoma de Manizales - <span>2009</span>
                            <p>Ingeniería Electrónica</p>
                        </FontSize>
                    </InstitutionName>
                </Container>
            </div>
    )
}