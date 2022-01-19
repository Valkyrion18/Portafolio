import styled from 'styled-components';

const SkillsContainer = styled.div`
    text-align: center;
    height: fit-content;
    border: 3px solid red;
    border-radius: 10px;
    margin: 5px 0;
`;

const DistributionSkills = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    margin-bottom: 15px;
`;

const TextFont = styled.h3`
    color: black;
`;

const GradientBar = styled.div`
    background: linear-gradient(90deg, rgb(58, 6, 78), rgb(19, 27, 146), rgb(58, 6, 78),
    rgb(19, 27, 146), rgb(58, 6, 78), rgb(19, 27, 146));
    border-radius: 10px;
        
`;

export const ContainerS = SkillsContainer
export const Distribution = DistributionSkills
export const FontSize = TextFont
export const StyleInput = GradientBar
