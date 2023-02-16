import React from 'react';
import AvatarName from '../../micro/AvatarName/AvatarName';
import SectionTitle from '../../micro/SectionTitle/SectionTitle';
import TextArea from '../../micro/TextArea/TextArea';
import {
	Container,
	Content,
	SectionText,
} from './styles';

function TextsAbout() {
	return (
		<Container>
			<Content>
				<SectionTitle titleAbout='ABOUT' />
				<AvatarName textColor="#FFB800">
					Bruno Faria
				</AvatarName>
				<SectionText>
					<TextArea />
				</SectionText>
			</Content>
		</Container>
	);
}

export default TextsAbout;