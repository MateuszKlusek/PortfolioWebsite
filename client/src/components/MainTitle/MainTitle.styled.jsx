import styled from "styled-components"

export const MainTitleContainer = styled.div`
   margin-bottom: 40px;
   padding: 0 5%;
   font-family: Didot, serif;
   letter-spacing: 1.5px;
   text-transform: uppercase;
`

export const Text = styled.div`
   font-size: ${props=>`${props.fontSize}px`};
   padding-bottom: ${props=>`${props.paddingBottom}px`};

   @media screen and (max-width: 720px) {
      font-size: ${props=>`${props.fontSize*.8}px`};
   }
   @media screen and (max-width: 570px) {
      font-size: ${props=>`${props.fontSize*.6}px`};
   }
   @media screen and (max-width: 440px) {
      font-size: ${props=>`${props.fontSize*.5}px`};
   }
`
