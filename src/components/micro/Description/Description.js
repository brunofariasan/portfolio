import { 
  Container, 
  Text,
} from './styles';

function Description(props) {
  const { textColor, fontWeight, children } = props;
	return (
    <Container>
      <Text style={{ color: textColor, fontWeight: fontWeight}}>
        {children}
      </Text>
    </Container>
	);
}

export default Description;