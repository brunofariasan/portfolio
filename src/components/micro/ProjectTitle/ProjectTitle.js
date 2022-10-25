import { 
  Container, 
  Title,
} from './styles';

function ProjectTitle(props) {
	return (
    <Container>
      <Title>
        {props.project}
      </Title>
    </Container>
	);
}

export default ProjectTitle;