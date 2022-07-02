import styled from "styled-components"

export const AboutContainer = styled.div`
    box-sizing: border-box;
    min-height: 300px; 
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    width:100%;
    padding: 20px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    color: ${props=>props.theme.dark};
`

export const Text = styled.div`
    padding:10px;
    padding-top: ${props=>`${props.paddingTop}px`};
    @media screen and (max-width: 615px) {
        font-size: 14px;
    }
`

export const Accented = styled.span`
    color: #4078c0;
    font-weight: 700;
    cursor: pointer;
`