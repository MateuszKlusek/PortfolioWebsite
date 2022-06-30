
// style
import * as S from "./Navbar.styled"

// hooks
import { useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    return (
    <S.NavbarContainer>
        <S.Left> Mateusz Kłusek / Software Developer </S.Left>
        <S.MiddleIcon></S.MiddleIcon>
        <S.Right>
            <S.Text active={location.pathname==="/work"}><S.StyledLink to="/work">work</S.StyledLink></S.Text>
            <S.Text active={location.pathname==="/about"}><S.StyledLink to="/about">about</S.StyledLink></S.Text>
            <S.Text active={location.pathname==="/contact"}><S.StyledLink to="/contact">contact</S.StyledLink></S.Text>
        </S.Right>

    </S.NavbarContainer>
    );
};

export default Navbar;
