// react
import {useEffect} from "react"

// style
import * as S from "./Work.styled"

// hooks
import {Route, Routes, useLocation,} from "react-router-dom";

// components
import Project from "./../Project/Project"

const Work = () => {
    let location = useLocation();

    return (<S.WorkContainer>
    <S.Tabs>
        <S.Tab ><S.StyledLink to="multipleCountdowns">Multiple Countdowns</S.StyledLink></S.Tab>
        <S.Tab ><S.StyledLink to="vscodeClone">VSCode Clone</S.StyledLink></S.Tab>
        <S.Tab ><S.StyledLink to="exploreGithub">Explore Github</S.StyledLink></S.Tab>
    </S.Tabs>


    <Routes>
        <Route path=":id" element={<Project />} />
        <Route path="/" element={<Project/>} />
    </Routes>
    </S.WorkContainer>);
};

export default Work;
