import {
  Container,
  StyleButton,
} from './styles';

function Button(props) {
  const { color, background, width, children } = props;
  return (
    <Container>
      <StyleButton style={{ color: color, background: background, width: width}}>
        {children}
      </StyleButton>
    </Container>
  );
}

export default Button;