import styled from "styled-components"

// hooks
import {Link} from "react-router-dom"

export const NavbarContainer = styled.div`
    height: 100px;
    display: flex;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.6px;
    font-weight: 300;
    color: #0e0d0d;
`

export const Left = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`

export const MiddleIcon = styled.div`
    width: 10%;
`

export const Right = styled.div`
    width: 45%;
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
    color: #0e0d0d;
    
    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #0e0d0d;
}
`