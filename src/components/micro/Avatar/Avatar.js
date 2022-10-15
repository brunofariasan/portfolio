import { 
  Container,
  ImageAvatar,
  Img,
} from './styles';

function Avatar() {
	return (
    <Container>
      <ImageAvatar>
        <Img src="https://avatars.githubusercontent.com/u/34657764?v=4" alt="avatar" />
      </ImageAvatar>
    </Container>
	);
}

export default Avatar;