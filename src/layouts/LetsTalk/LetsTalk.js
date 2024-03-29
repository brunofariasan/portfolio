import React from 'react';
import { useState } from 'react';
import Button from '../../components/micro/Button/Button';
import Input from '../../components/micro/Input/Input';
import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import TextArea from '../../components/micro/TextArea/TextArea';
import TitleTalk from '../../components/micro/TitleTalk/TitleTalk';
import emailjs from '@emailjs/browser'
import Spinner from '../../components/micro/Spinner/Spinner';
import { useTranslation } from "react-i18next";

import {
  Container,
  SpinnerSection,
  Content,
  SectionFlex,
  SectionText,
  SectionIcons,
  SectionInput,
  ErrorSection,
  SectionButton,
} from './styles';
import Icons from '../../components/micro/Icons/Icons';

const LetsTalk = React.forwardRef((props, ref) => {
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
  const { t, i18n: { language } } = useTranslation();

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
      name: name,
      email: email,
      message: message,
    }

    if (name === '' || email === '' || message === '') {
      setIsLoading(false)
      return;
    } else {
      setIsLoading(true)
    }

    emailjs.send("serviceGmail", "template_3h3cuma", templateParams, "X2vukpea5orjw7kwk")
      .then((response) => {
        setName('')
        setEmail('')
        setMessage('')
        setIsLoading(false)
      }, (err) => {
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

  return (
    <Container ref={ref}>
      {isLoading &&
        <SpinnerSection>
          <Spinner />
        </SpinnerSection>
      }
      <Content>
        <SectionTitle titleWork={t("contact")} />
        <SectionFlex>
          <SectionText>
            <TitleTalk />
            <TextArea >{t("letsMessage")} &#128578;</TextArea>
            <SectionIcons>
              <Icons
                width="200px"
                height="50px"
                flexDirection="initial"
              />
            </SectionIcons>
          </SectionText>
          <SectionInput onSubmit={sendEmail}>
            <Input
              width="100%"
              height="50px"
              type="text"
              title={t("titleInputName")}
              placeholder={t("placeholderName")}
              onChange={(e) => setName(e.target.value)}
              value={name}
              onBlur={handleNameBlur}
            />
            <ErrorSection>
              {nameFocus ? (
                t("requiredField")
              ) : nameError && (
                t("fillFieldName")
              )}
            </ErrorSection>
            <Input
              width="100%"
              height="50px"
              type="email"
              title="E-mail"
              placeholder={t("placeholderEmail")}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onBlur={handleEmailBlur}
            />
            <ErrorSection>
              {emailFocus ? (
                t("requiredField")
              ) : emailError ? (
                t("fillFieldEmail")
              ) : !isValid && (
                t("fieldEmailInvalid")
              )}
            </ErrorSection>
            <Input
              width="100%"
              height="104px"
              type="textarea"
              title={t("titleInputMessage")}
              placeholder={t("placeholderMessage")}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onBlur={handleMessageBlur}
            />
            <ErrorSection>
              {messageFocus ? (
                t("requiredField")
              ) : messageError && (
                t("fillFieldMessage")
              )}
            </ErrorSection>
            <SectionButton>
              <Button
                type="submit"
                color="black"
                height="50px"
              >
                {t("sendMessage")}
              </Button>
            </SectionButton>
          </SectionInput>
        </SectionFlex>
      </Content>
    </Container>
  );
});

export default LetsTalk;