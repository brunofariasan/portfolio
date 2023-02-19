import {
  Container,
} from './styles';

function Spinner() {
  return (
    <Container>
      <div class="lds-ring">
        <div></div><div></div><div></div><div></div>
      </div>
    </Container>
  );
}

export default Spinner;