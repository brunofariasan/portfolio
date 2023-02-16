import React from 'react';
import { useState } from 'react';
import Button from '../../components/micro/Button/Button';
import Input from '../../components/micro/Input/Input';
import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import TextArea from '../../components/micro/TextArea/TextArea';
import TitleTalk from '../../components/micro/TitleTalk/TitleTalk';
import emailjs from '@emailjs/browser'
import Spinner from '../../components/micro/Spinner/Spinner';
import {
  Container,
  SpinnerSection,
  Content,
  SectionFlex,
  SectionText,
  SectionInput,
  ErrorSection,
} from './styles';

function LetsTalk() {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name == '') {
      setNameFocus(true)
    } else {
      setNameFocus(false)
    } if (email == '') {
      setEmailFocus(true)
    } else {
      setEmailFocus(false)
    } if (message == '') {
      setMessageFocus(true)
      return;
    } else {
      setMessageFocus(false)
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    }

    if (name === '' || email === '' || message === '') {
      setIsLoading(false)
      return;
    } else {
      setIsLoading(true)
    }

    emailjs.send("service_nhcj94n", "template_7vpmc4c", templateParams, "52Oa3eNjO3KM21-M6")
    .then((response) => {
      console.log("Email Enviado com SUCESSO!!!", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
      setIsLoading(false)
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  const handleNameBlur = (e) => {
    setNameFocus(false)
    if (name == 0) {
      setNameError(true);
    }
    else {
      setNameError(false)
    }
  }
  const [isValid, setIsValid] = useState(true);

  const handleEmailBlur = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValid(emailRegex.test(emailValue))
    setEmailFocus(false)
    if (email == 0) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  const handleMessageBlur = () => {
    setMessageFocus(false)
    if (message == 0) {
      setMessageError(true);
    }
    else {
      setMessageError(false)
    }
  }

  console.log(isLoading)

  return (
    <Container>
      { isLoading &&
        <SpinnerSection>
          <Spinner />
        </SpinnerSection>
      }
      <Content>
        <SectionTitle titleWork='CONTACT' />
        <SectionFlex>
          <SectionText>
            <TitleTalk />
            <TextArea />
          </SectionText>
          <SectionInput onSubmit={sendEmail}>
            <Input
              width="100%"
              height="50px"
              type="text"
              title="Name"
              placeholder="Write your name here"
              onChange={(e) => setName(e.target.value)}
              value={name}
              onBlur={handleNameBlur}
            />
            <ErrorSection>
              {nameFocus ? (
                "* Required field"
              ) : nameError && (
                "* Fill in the name field"
              )}
            </ErrorSection>
            <Input
              width="100%"
              height="50px"
              type="email"
              title="E-mail"
              placeholder="Write your e-mail here"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onBlur={handleEmailBlur}
            />
            <ErrorSection>
              {emailFocus ? (
                "* Required field"
              ) : emailError ? (
                "* Fill in the E-mail field"
              ) : !isValid && (
                "* Enter a valid E-mail address"
              )}
            </ErrorSection>
            <Input
              width="100%"
              height="104px"
              type="textarea"
              title="Message"
              placeholder="Write your message here"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onBlur={handleMessageBlur}
            />
            <ErrorSection>
              {messageFocus ? (
                "* Required field"
              ) : messageError && (
                "* Fill in the message field"
              )}
            </ErrorSection>
            <Button type="submit" />
          </SectionInput>
        </SectionFlex>
      </Content>
    </Container>
  );
}

export default LetsTalk;