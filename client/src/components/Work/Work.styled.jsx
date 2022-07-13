import styled from 'styled-components'

// hooks
import { Link } from 'react-router-dom'

export const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  position: relative;
  letter-spacing: 0.4px;
`

export const Tabs = styled.div`
  width: 100%;
  min-height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-out;
  margin-bottom: 25px;
`

export const Tab = styled.div`
  position: relative;
  margin: 0 10px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;

  @media screen and (max-width: 615px) {
    font-size: 12px;
  }
`

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.medium};
  margin-top: -10px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.dark};
`

export const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px auto;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr;
  }
`

export const ProjectImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  max-height: 300px;

  @media screen and (max-width: 800px) {
    max-width: 250px;
    max-height: 250px;
    margin: auto;
  }
`

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 2px 2px 6px 1px #d1cdd1;
`

export const ShowPicture = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
`

/*  project info */
export const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 20px;
`
export const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: ${(props) => props.theme.medium};
`

export const Text = styled.div`
  font-size: 18px;
  text-transform: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  @media screen and (max-width: 615px) {
    font-size: 14px;
  }
`

export const GoTo = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 200px;
`

export const GoToWebsite = styled.img`
  width: auto;
  height: 35px;
  cursor: pointer;
  padding-left: 10px;
  transition: all 0.248s;

  @media screen and (max-width: 615px) {
    transform: scale(0.7);
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const Stack = styled(Text)`
  margin-top: 30px;
`

export const ProjectNotPicked = styled.div`
  font-size: 14px;
`

export const Accented = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.medium};
  text-decoration: underline;
  text-underline-offset: 3px;
`
