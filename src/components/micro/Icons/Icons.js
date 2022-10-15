import iconGit from '../../../assets/github.png';
import iconInsta from '../../../assets/Insta.png';
import iconLink from '../../../assets/icon_Linkedin.png';
import {
  Container, 
  Icon,
} from './styles';

function Icons() {
	return (
    <Container>
      <Icon>
        <img src={iconGit} alt="avatar" />
      </Icon>
      <Icon>
        <img src={iconInsta} alt="likendin" />
      </Icon>
      <Icon>
        <img src={iconInsta} alt="instagram" />
      </Icon>
      <Icon>
        <img src={iconLink} alt="instagram" />
      </Icon>
      <Icon>
        <img src={iconLink} alt="instagram" />
      </Icon>
    </Container>
	);
}

export default Icons;