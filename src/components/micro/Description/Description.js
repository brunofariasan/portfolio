import { 
  Container, 
  Text,
} from './styles';

function Description(props) {
	return (
    <Container>
      <Text>
        {props.text}
      </Text>
    </Container>
	);
}

export default Description;