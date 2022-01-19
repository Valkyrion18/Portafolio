import styled from 'styled-components';

const EducationContainer = styled.div`
    text-align: "center";
    height: fit-content;
    border: 3px solid orange;
    border-radius: 10px;
    margin: 5px 0;
    padding: 0 10px;
`;

const Institution = styled.div`
    text-align: "center";
    height: inherit;
    font-size: 12px;
`;

const TextFont = styled.div`
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;
`;


export const Container = EducationContainer
export const InstitutionName = Institution
export const FontSize = TextFont
