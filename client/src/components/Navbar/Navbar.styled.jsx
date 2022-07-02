import styled from "styled-components"

// hooks
import {Link} from "react-router-dom"

export const NavbarContainer = styled.div`
    height: 100px;
    display: grid;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.6px;
    font-weight: 300;
    color: ${props=>props.theme.dark};
    grid-template-columns: 45fr 10fr 45fr;
    grid-template-areas: "left icon right";

   @media screen and (max-width: 550px) {
    grid-template-columns: 4fr 10fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "icon left"
                     "icon right";
    }
`

export const Left = styled.div`
grid-area: left;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
`

export const MiddleIcon = styled.div`
grid-area: icon;
width: 100%;
`

export const Right = styled.div`
grid-area: right;
width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    `

export const Text = styled.div`
    cursor: pointer;
    text-transform: uppercase;
    margin: 0 10px;
    font-weight: ${props=>props.active? '700' : "400"};
    font-size: ${props=>props.active ? "20px": "14px"};
    transition: all 0.248s;
    `

export const StyledLink = styled(Link)`
    text-decoration: none;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${props=>props.theme.dark};
        color: ${props=>props.active ? props.theme.medium: props.theme.dark};
}
`