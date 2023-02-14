import { 
  Container, 
  Name,
} from './styles';

function AvatarName(props) {
	const { textColor, children } = props;
	return (
		<Container >
			<Name style={{ color: textColor}}>
				{children}
			</Name>
		</Container>
	);
}

export default AvatarName;