import Line from '../../micro/Line/Line';
import { 
	Container,
	ScrollText, 
	Text,
} from './styles';

function Scroll() {
	return (
		<Container>
			<Line />
			<ScrollText>
				<Text>
					SCROLL DOWN
				</Text>
			</ScrollText>
		</Container>
	);
}

export default Scroll;