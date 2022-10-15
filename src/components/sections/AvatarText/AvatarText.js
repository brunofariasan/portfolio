import AvatarName from '../../micro/AvatarName/AvatarName';
import WorkDescription from '../../micro/WorkDescription/WorkDescription';
import { 
  Container, 
} from './styles';

function AvatarText() {
	return (
		<Container>
			<AvatarName />
			<WorkDescription />
		</Container>
	);
}

export default AvatarText;