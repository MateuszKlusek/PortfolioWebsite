// react
import { useEffect, useRef, useState } from "react";

// styles
import * as S from "./Contact.styled"

// packages
import axios from "axios"

const Contact = () => {
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [context, setContent] = useState("")

    const EmailInputRef = useRef()
    const SubjectInputRef = useRef()
    const ContextInputRef = useRef()



const handleClick = async () =>{
    console.log(email, subject, context);
    try{
        const response = await axios({
            method: "post",
            url: "http://localhost:5001",
            data: {email, subject, context}
        })

        console.log(response);
    }catch(err){
        EmailInputRef.current.value = ""
        SubjectInputRef.current.value = ""
        ContextInputRef.current.value = ""
        setEmail(prev=>"")
        setSubject(prev=>"")
        setContent(prev=>"")
        console.log(err);
    }
}

const validateEmail = (email) => {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return re.test(email)
};
useEffect(()=>{
    if (!validateEmail(email)){
        EmailInputRef.current.style.outlineColor = "red"
    }else{
        EmailInputRef.current.style.outlineColor = "#94a8b3"
    }
},[email])


return <S.ContactContainer>


<S.Left>

        <S.Text fontSize={30} paddingBottom={20} underline={true} fontWeight={700}>I'm for hire!
        </S.Text>

        <S.Text fontSize={18}>
            If you are interested in hiring a developer who:
            <ul>
                <li> has a passion for coding,</li>
                <li> is not dogmatic about technology,</li>
                <li> has a vast experience working with business side,</li>
                <li> is a team player,</li>
                <li> thrives under pressure,</li>
                <li>loves complex challanges,</li> 
                <li>is a quick study,</li>
            <li>is constantly honing his coding skils,</li>
            </ul>
        </S.Text>

       <S.Text fontSize={18}> do not hesitate to send me <S.Email onClick={()=>{
            window.open('mailto:contact@mateuszklusek.com?Body=Hello, I would like to contact you about an employment offer.&Subject=Contact regarding employment offer');
       }}>an email</S.Email> or use the form</S.Text>

</S.Left>
<S.Right>

    <S.Input 
        placeholder={"email"} 
        ref={EmailInputRef} 
        onChange={(e)=>{
            setEmail(prev=>e.target.value)
        }}
    /> 
    <S.Input 
        placeholder={"subject"} 
        ref={SubjectInputRef} 
        onChange={(e)=>{
            setSubject(prev=>e.target.value)
        }}
    /> 
    <S.Textarea 
        placeholder={"content"}    
        ref={ContextInputRef} 
        onChange={(e)=>{
            setContent(prev=>e.target.value)
        }}
    /> 
    <S.SendButton 
        onClick={()=>{
            handleClick()
        }}
        active={validateEmail(email)}
        >
        send message
    </S.SendButton>



</S.Right>
    </S.ContactContainer>;
};

export default Contact;
