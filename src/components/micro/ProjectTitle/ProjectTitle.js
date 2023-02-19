import { 
  Container, 
  Title,
} from './styles';

function ProjectTitle(props) {
  const { color, letterSpacing, children} = props;
	return (
    <Container>
      <Title style={{ color: color, letterSpacing}}>
        {children}
      </Title>
    </Container>
	);
}

export default ProjectTitle;