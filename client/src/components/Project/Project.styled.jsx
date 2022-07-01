import styled from "styled-components"

export const ProjectEntryContainer = styled.div`
    width: 100%;
    /* border: 1px solid black; */
    height:400px;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

export const ProjectImagesContainer = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    column-gap: 40px;
    justify-items: center;
`


export const MainProjectImg = styled.img`
    height: 300px;
    width: 300px;
    filter: grayscale(100%);
    cursor: pointer;

    &:hover{
        filter: grayscale(0%);
    }
`

export const ProjectInfo = styled.div`
    position: absolute;
    opacity:0
`

export const SingleProjectImg = styled.img`
    height: 300px;
    width: 300px;
    filter: grayscale(100%);
    cursor: pointer;

    &:hover{
        filter: grayscale(0%);
    }
padding: 30px 0 0 110px;
`

export const Text = styled.div`
`


export const SingleProjectContainer = styled.div`
    width: 100%;
    /* border: 1px solid black; */
    height:400px;
    display: flex;
`