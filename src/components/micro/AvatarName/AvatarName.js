import { 
  Container, 
  Name,
} from './styles';

function AvatarName(props) {
	const { textColor, fontSize, children } = props;
	return (
		<Container >
			<Name style={{ color: textColor, fontSize: fontSize}} translate="no">
				{children}
			</Name>
		</Container>
	);
}

export default AvatarName;