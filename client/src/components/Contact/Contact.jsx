// styles
import * as S from "./Contact.styled"

// assets
import email from "./../../assets/email.png"

const Contact = () => {
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

       <S.Text fontSize={18}> do not hesitate to contact me. </S.Text>

        <S.EmailImg src={email} alt={"email"} onClick={()=>{
            window.open('mailto:contact@mateuszklusek.com?Body=Hello, I would like to contact you about an employment offer.&Subject=Contact regarding employment offer');
        }}/>


</S.Left>
<S.Right>

   <S.Input placeholder={"email"}/> 
   <S.Input placeholder={"subject"}/> 
   <S.Textarea placeholder={"content"}/> 
   <S.SendButton>send message</S.SendButton>



</S.Right>
    </S.ContactContainer>;
};

export default Contact;
