import LineTitle from '../LineTitle/LineTitle';
import { 
  Container, 
  Title,
} from './styles';

function SectionTitle(props) {
	return (
		<Container>
			<Title>
				{props.titleAbout}
				{props.titleSkills}	
				{props.titleContact}
				{props.titleWork}
			</Title>
			<LineTitle />
		</Container>
	);
}

export default SectionTitle;