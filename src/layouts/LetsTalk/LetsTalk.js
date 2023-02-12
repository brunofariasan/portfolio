import Button from '../../components/micro/Button/Button';
import Input from '../../components/micro/Input/Input';
import SectionTitle from '../../components/micro/SectionTitle/SectionTitle';
import TextArea from '../../components/micro/TextArea/TextArea';
import TitleTalk from '../../components/micro/TitleTalk/TitleTalk';
import {
  Container,
  Content,
  SectionText,
  SectionInput,
  SectionFlex,

} from './styles';

function LetsTalk() {
  return (
    <Container>
      <Content>
        <SectionTitle titleWork='CONTACT' />
        <SectionFlex>
          <SectionText>
            <TitleTalk />
            <TextArea />
          </SectionText>
          <SectionInput>
            <Input
              width="100%"
              height="50px"
              type="text"
              title="Name"
              placeholder="Write your name here"
            />
            <Input
              width="100%"
              height="50px"
              type="email"
              title="E-mail"
              placeholder="Write your e-mail here"
            />
            <Input
              width="100%"
              height="104px"
              type="textarea"
              title="Message"
            />
            <Button />
          </SectionInput>
        </SectionFlex>
      </Content>
    </Container>
  );
}

export default LetsTalk;