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
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    padding-right: 10px;
` 

export const Right = styled.div`
    width: 100%;
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
    text-underline-offset: 7px;
    @media screen and (max-width: 615px) {
        font-size: 14px;
    }
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
    width: 100%;    
    height: 35px;
    outline: none;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid ${props=>props.theme.medium};
    margin-bottom: 5px;
    border-radius: 5px;

    &:focus{
        outline: 2px solid ${props=>props.theme.medium};
    }
`

export const Textarea = styled.textarea`
    box-sizing: border-box;
    width: 100%;    
    height: 200px; 
    resize: none;
    outline: none;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid ${props=>props.theme.medium};
    border-radius: 5px;
    margin-bottom: 10px;

    &:focus{
        outline: 2px solid ${props=>props.theme.medium};
    }
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

    pointer-events: ${props=>!props.active&&"none"};
    opacity: ${props=>props.active? 1:0.5};

    &:hover{
        opacity: 0.85
    }
    &:active{
        opacity: 0.7;
        transform: translateY(1px);
        box-shadow: 0px 1px 4px 0px #37758d;
    }
`


export const Email = styled.span`
    color:${props=>props.theme.medium};
    font-weight: 900;
    font-size: 20px;
    padding: 0 3px;
    text-decoration: underline;
    text-underline-offset: 5px;
    cursor: pointer;
`

export const Message = styled.div`
    margin-top: 15px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: ${props=>props.color};

`