// styles
import * as S from './MainTitle.styled'

const MainTitle = () => {
  return (
    <S.MainTitleContainer>
      <S.Text fontSize={54} paddingBottom={20}>
        I'm a software developer
      </S.Text>
      <S.Text fontSize={32}>I create performative apps</S.Text>
      <S.Text fontSize={32}>using MERN stack and Rust</S.Text>
    </S.MainTitleContainer>
  )
}

export default MainTitle
