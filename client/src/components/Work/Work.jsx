import { useState } from "react";

// style
import * as S from "./Work.styled"

// helpers
import {projectsData} from "./../../helpers/projectsData.js"

// assets
import goToGithub from "./../../assets/gotogithub.png"
import externalLink from "./../../assets/externallink.png"

const Work = () => {
    const [activeProject, setActiveProject] = useState("multiplecountdowns")

    return (<S.WorkContainer>
        <S.Tabs>
            {projectsData.map((t,idx)=>(
                <S.Tab key={idx} onClick={()=>{
                    setActiveProject(prev=>t.name)
                }}>
                    {t.name ===activeProject && <S.Line />}
                    {t.fullName}</S.Tab>
            ))}
        </S.Tabs>


        <S.ProjectContainer>
            {activeProject && <>
           <S.ProjectImgContainer>
                <S.ProjectImg 
                    src={projectsData[projectsData.findIndex(el=>el.name === activeProject)].data.imgURL} 
                ></S.ProjectImg>
            </S.ProjectImgContainer> 

            <S.ProjectInfo>
                <S.Title>{projectsData[projectsData.findIndex(el=>el.name === activeProject)].fullName}</S.Title>
                <S.Text>
                    {projectsData[projectsData.findIndex(el=>el.name === activeProject)].data.text}
                </S.Text>
                <S.Stack>
                    Technology used: {projectsData[projectsData.findIndex(el=>el.name === activeProject)].data.stack}
                </S.Stack>


            <S.GoTo>
                <S.GoToWebsite src={externalLink} right={60} alt="goToWebiste" onClick={()=>{
                    window.open(
                        projectsData[projectsData.findIndex(el=>el.name === activeProject)].website, "_blank");
                }}/>
                <S.GoToWebsite src={goToGithub} right={100} alt="goToWebiste" onClick={()=>{
                    window.open(
                        projectsData[projectsData.findIndex(el=>el.name === activeProject)].github, "_blank");
                }}/>
            </S.GoTo>

            </S.ProjectInfo>
            </>
            }
            {!activeProject && <S.ProjectNotPicked></S.ProjectNotPicked>}
    
            
        </S.ProjectContainer>



    </S.WorkContainer>);
};

export default Work;
