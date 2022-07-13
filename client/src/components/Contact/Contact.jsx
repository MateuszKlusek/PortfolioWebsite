// react
import { useEffect, useRef, useState } from 'react'

// styles
import * as S from './Contact.styled'

// packages
import axios from 'axios'
import gsap from 'gsap'

// helpers
import { axiosURL } from '../../config/axios'

const Contact = () => {
  // states
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [context, setContent] = useState('')

  const [isEmailValid, setIsEmailValid] = useState(false)

  const [isSending, setIsSending] = useState(false)
  const [message, setMessage] = useState('')

  // refs
  const EmailInputRef = useRef()
  const SubjectInputRef = useRef()
  const ContextInputRef = useRef()
  const MessageRef = useRef()

  // handling response message display (removing after 2 seconds)
  useEffect(() => {
    if (message !== 'Sending...') {
      const tl = gsap.timeline({
        onComplete: () => {
          setMessage((prev) => '')
        },
      })
      tl.to(MessageRef.current, { autoAlpha: 0, delay: 2 })
    }
  }, [message])

  // handling email value validity
  useEffect(() => {
    if (validateEmail(email)) {
      setIsEmailValid((prev) => true)
    } else {
      setIsEmailValid((prev) => false)
    }
  }, [email])

  const handleClick = async () => {
    try {
      // setIsSending(prev=>true)
      setMessage((prev) => 'Sending...')
      const response = await axios({
        method: 'post',
        url: `${axiosURL}/email`,
        data: { email, subject, context },
      })

      if (response.status === 200) {
        setMessage((prev) => 'Email was sent successfully')
      }
    } catch (err) {
      if (err.response.status === 429) {
        setMessage((prev) => 'Too many requests. Try again later.')
      } else {
        setMessage((prev) => 'Something went wrong, please try again.')
      }
    } finally {
      // cleaning up input values and states
      EmailInputRef.current.value = ''
      SubjectInputRef.current.value = ''
      ContextInputRef.current.value = ''
      setEmail((prev) => '')
      setSubject((prev) => '')
      setContent((prev) => '')
      // setIsSending(prev=>false)
    }
  }

  // email validation rules
  const validateEmail = (email) => {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return re.test(email)
  }

  // handling email input field border for valid/invalid email value
  useEffect(() => {
    if (!validateEmail(email)) {
      EmailInputRef.current.style.outlineColor = '#b51220'
    } else {
      EmailInputRef.current.style.outlineColor = '#94a8b3'
    }
  }, [email])

  return (
    <S.ContactContainer>
      <S.Left>
        <S.Text fontSize={30} paddingBottom={20} underline={true} fontWeight={700}>
          I'm for hire!
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

        <S.Text fontSize={18}>
          do not hesitate to send me
          <S.Email
            onClick={() => {
              window.open(
                'mailto:contact@mateuszklusek.com?Body=Hello, I would like to contact you about an employment offer.&Subject=Contact regarding employment offer',
              )
            }}
          >
            an email
          </S.Email>{' '}
          or use the form
        </S.Text>
      </S.Left>
      <S.Right>
        <S.Input
          placeholder={'email'}
          ref={EmailInputRef}
          onChange={(e) => {
            setEmail((prev) => e.target.value)
          }}
        />
        {!isEmailValid && email && <S.EmailWarning>Email is invalid</S.EmailWarning>}
        <S.Input
          placeholder={'subject'}
          ref={SubjectInputRef}
          onChange={(e) => {
            setSubject((prev) => e.target.value)
          }}
        />
        <S.Textarea
          placeholder={'content'}
          ref={ContextInputRef}
          onChange={(e) => {
            setContent((prev) => e.target.value)
          }}
        />
        <S.SendButton
          onClick={() => {
            handleClick()
          }}
          isActive={validateEmail(email)}
        >
          send message
        </S.SendButton>
        {message && (
          <S.Message
            ref={MessageRef}
            color={
              message === 'Something went wrong, please try again.' ||
              message === 'Too many requests. Try again later.'
                ? '#b51220'
                : 'green'
            }
          >
            {message}
          </S.Message>
        )}
      </S.Right>
    </S.ContactContainer>
  )
}

export default Contact
