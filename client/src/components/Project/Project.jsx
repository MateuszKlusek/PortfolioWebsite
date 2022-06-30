// react
import { useLayoutEffect, useState } from "react";

// styles
import * as S from "./Project.styled"

// hooks
import { useParams } from "react-router-dom";
import { projectsData } from "../../helpers/projectsData";

// helpers

const Project = () => {
    const [id, setId] = useState("exploreGithub")
    const params = useParams()
    useLayoutEffect(()=>{
        if (params.id in projectsData){
            setId(params.id)
        }
    },[params.id])

    return <div>{projectsData[id].text}</div>;
};

export default Project;
