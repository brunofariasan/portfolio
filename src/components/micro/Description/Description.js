import { 
  Container, 
  Text,
} from './styles';

function Description(props) {
  const { textColor, fontWeight, textAlign, children } = props;
	return (
    <Container>
      <Text style={{ color: textColor, fontWeight: fontWeight, textAlign: textAlign}}>
        {children}
      </Text>
    </Container>
	);
}

export default Description;