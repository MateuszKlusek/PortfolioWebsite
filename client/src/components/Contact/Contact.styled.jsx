import styled, {keyframes} from "styled-components"

export const ContactContainer = styled.div`
    box-sizing: border-box;
    display: grid;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    font-weight: 400;
    font-size: 14px;
    padding: 20px;
    color: ${props=>props.theme.dark};
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 615px) {
        grid-template-columns: 1fr;
    }
`

export const Left = styled.div`
    width: 100%;
    border: 1px solid black;
` 

export const Right = styled.div`
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 

export const Text = styled.div`
    font-size: ${props=>`${props.fontSize}px`};
    padding-bottom: ${props=>`${props.paddingBottom}px`};
    text-decoration: ${props=>props.underline&& "underline"};
    font-weight: ${props=>props.fontWeight};
`

const leaves = keyframes`
    0% {
        transform: scale(1.0);
    }
    100% {
        transform: scale(1.1);
    }
`


export const EmailImg = styled.img`
    padding-top: 20px;
    padding-left: 50px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    animation: 1s ${leaves} infinite;
`

export const Input = styled.input`
    box-sizing: border-box;
    width: 80%;    
    height: 30px;
    outline: none;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    font-size: 16px;
    padding: 5px;
    border: 1px solid ${props=>props.theme.medium};
    margin-bottom: 5px;
    border-radius: 5px;
`

export const Textarea = styled.textarea`
    box-sizing: border-box;
    width: 80%;    
    height: 200px; 
    resize: none;
    outline: none;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    font-size: 16px;
    padding: 5px;
    border: 1px solid ${props=>props.theme.medium};
    border-radius: 5px;
    margin-bottom: 10px;
`

export const SendButton = styled.div`
    width: 200px;
    height: 50px;
    background:${props=>props.theme.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-radius: 5px;
    cursor:pointer;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.6px;
    animation: all 0.248s;
    box-shadow: 1px 1px 4px 0px #37758d;

    &:hover{
        opacity: 0.85
    }
    &:active{
        opacity: 0.7;
        transform: translateY(1px);
        box-shadow: 0px 1px 4px 0px #37758d;
    }
`