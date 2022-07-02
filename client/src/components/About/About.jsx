
// style
import * as S from "./About.styled"

const About = () => {
return <S.AboutContainer>
            <S.Text>My name is Mateusz Kłusek. I'm a full-stack software developer, I work remotely.  </S.Text>
            <S.Text> My current focus is on exploring both ends of websites performance - incredibly fast apps with almost native speed using WebAssembly written in Rust for modern devices with very fast internet connection on one side and websites that require a distinct separation between UI thread and separately-spawn Web Workers for computing for old devices with slow internet connection on the other. </S.Text>
            <S.Text>My technology stack includes but it's not limited to: HTML, CSS, JavaScript/Typescript, Node.js, React, MongoDB, WebAssembly and Rust.</S.Text>
            <S.Text>I speak English and Polish.</S.Text> 

            <S.Text paddingTop={50}> You can check my work on my <S.Accented
           onClick={()=>{
            window.open("http://github.com/mateuszklusek")}} 
            >Github</S.Accented></S.Text>
</S.AboutContainer>;
};

export default About;
