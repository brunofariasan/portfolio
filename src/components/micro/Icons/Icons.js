import github from '../../../assets/github.png';
import linkedin from '../../../assets/linkedin.svg';
import instagram from '../../../assets/instagram.svg';
import whatsapp from '../../../assets/whatsapp.svg';
import {
  Container, 
  Icon,
} from './styles';

function Icons(props) {
  const { flexDirection, width, height  } = props;
  
	return (
    <Container style={{flexDirection: flexDirection, width: width, height: height}}>
      <Icon href="https://github.com/brunofariasan">
        <img src={github} alt="avatar" />
      </Icon>
      <Icon href="https://www.linkedin.com/in/bruno-santos-faria-66673411a/">
        <img src={linkedin} alt="linkedin" />
      </Icon>
      <Icon href="https://www.instagram.com/bruno.san.faria/">
        <img src={instagram} alt="instagram" />
      </Icon>
      <Icon href="https://wa.me/55037998375432">
        <img src={whatsapp} alt="whatsapp" />
      </Icon>
    </Container>
	);
}

export default Icons;