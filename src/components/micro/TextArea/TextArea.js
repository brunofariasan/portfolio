import {
  Container,
  Text,
} from './styles';

function TextArea(props) {
  const { children } = props;
  return (
    <Container>
      <Text>
        {children}
      </Text>
    </Container>
  );
}

export default TextArea;