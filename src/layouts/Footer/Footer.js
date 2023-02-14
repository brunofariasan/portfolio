import AvatarName from '../../components/micro/AvatarName/AvatarName';
import WorkDescription from '../../components/micro/WorkDescription/WorkDescription';
import TextCopyright from '../../components/micro/TextCopyright/TextCopyright';
import { 
  Container, 
} from './styles';

function Footer() {
	return (
		<Container>
			<AvatarName textColor="#020202">
        Bruno Faria
      </AvatarName>
      <TextCopyright />
		</Container>
	);
}

export default Footer;