import {
  Container,
  StyleButton,
} from './styles';

function Button(props) {
  const { color, background, width, height, children } = props;
  return (
    <Container>
      <StyleButton style={{ color: color, background: background, width: width, height: height}}>
        {children}
      </StyleButton>
    </Container>
  );
}

export default Button;