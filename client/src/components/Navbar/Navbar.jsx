
// style
import * as S from "./Navbar.styled"

// hooks
import { useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    const handlePathname = (path) =>{
        var pathnameWithoutParams = path.split("/").filter(el=>el)
        return `/${pathnameWithoutParams[0]}`
    }


    return (
    <S.NavbarContainer>
        <S.Left> Mateusz Kłusek / Software Developer </S.Left>
        <S.MiddleIcon></S.MiddleIcon>
        <S.Right>
            <S.Text active={handlePathname(location.pathname)==="/work"}><S.StyledLink active={handlePathname(location.pathname)==="/work"} to="/work">work</S.StyledLink></S.Text>
            <S.Text active={handlePathname(location.pathname)==="/about"}><S.StyledLink active={handlePathname(location.pathname)==="/about"} to="/about">about</S.StyledLink></S.Text>
            <S.Text active={handlePathname(location.pathname)==="/contact"}><S.StyledLink active={handlePathname(location.pathname)==="/contact"} to="/contact">contact</S.StyledLink></S.Text>
        </S.Right>

    </S.NavbarContainer>
    );
};

export default Navbar;
