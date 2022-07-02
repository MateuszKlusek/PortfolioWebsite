import styled from "styled-components"

export const AppContainer = styled.div`
    background: ${props=>props.theme.light};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    width: 100%;
    user-select: none;
`

export const MainPageContainer = styled.div`
    max-width: 1200px;
    width: 90%;
`