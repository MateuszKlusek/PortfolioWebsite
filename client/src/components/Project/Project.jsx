// react
import { useLayoutEffect, useRef, useState } from "react";

// styles
import * as S from "./Project.styled"

// hooks
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../../helpers/projectsData";

// helpers
import gsap from "gsap"

// assets
import multiplecountdownsmain from "./../../assets/multiplecountdowns/threecountdowns.png"
import exploregithubmain from "./../../assets/exploregithub/mainoading.png"
import vscodeclone from "./../../assets/vscodeclone/hellopage.png"

const Project = () => {
    const [id, setId] = useState("")
    const params = useParams()
    const location = useLocation()
    let navigate = useNavigate();

    useLayoutEffect(()=>{
        if (params.id in projectsData) setId(params.id)
        if (location.pathname === "/work") setId("")
    },[location])

 
    // refs
    const MainProjectImgRefs = useRef([])
    const ProjectInfoRef = useRef()

    // functions
    const handleAnimation=(nb)=>{
        const tl = gsap.timeline({onComplete: ()=>{
        }})
        var goToPosition = MainProjectImgRefs.current[0]
        console.log(goToPosition);
        var nbOfProjects = 3
        for (var p=0; p<nbOfProjects; p++){
            if (p!==nb){
                MainProjectImgRefs.current[p].style.opacity= "0"
            }
        }

        tl.to(MainProjectImgRefs.current[nb], {
            x:-340*nb,
            duration: 0.22,
        })
        tl.to(ProjectInfoRef.current, {
            opacity: 1,
        })
    }

    return <>{
        <S.ProjectEntryContainer>
            <S.ProjectImagesContainer>
                <S.MainProjectImg src={multiplecountdownsmain} alt="multiplecountdown" ref={(el)=>MainProjectImgRefs.current[0]=el}  onClick={()=>{
                    handleAnimation(0)
                }}/>  
                 <S.MainProjectImg src={vscodeclone} alt="vscodeclone" ref={(el)=>MainProjectImgRefs.current[1]=el}  onClick={()=>{
                    handleAnimation(1)
                }}/>
                <S.MainProjectImg src={exploregithubmain} alt="multiplecountdown"  ref={(el)=>MainProjectImgRefs.current[2]=el}  onClick={()=>{
                    handleAnimation(2)
                }}/>
               
               {id && <S.ProjectInfo ref={ProjectInfoRef}>{projectsData[id].text}</S.ProjectInfo>}
            </S.ProjectImagesContainer>
            </S.ProjectEntryContainer>
        }

     
        
        </>
        ;
};

export default Project;
