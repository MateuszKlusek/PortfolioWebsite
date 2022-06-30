import styled from "styled-components"

// hooks
import {Link} from "react-router-dom"

export const WorkContainer = styled.div`
   min-height: 500px; 
   display: flex;
   flex-direction: column;
   text-transform: uppercase;
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   font-size: 14px;
   letter-spacing: 0.4px;
`

export const Tabs = styled.div`
   width: 100%;
   height: 25px;
   padding-top: 15px;
   display: flex;
   justify-content: center;
   `

export const Tab = styled.div`
position: relative;
   padding: 0 10px;
`

export const Line = styled.div`
   position: absolute;
   width: 220px;
   height: 2px;
   background: #b6adad;
   margin-top: -10px;
   left:0;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0e0d0d;
    
    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #0e0d0d;
}
`