import React from 'react';
import AvatarName from '../../micro/AvatarName/AvatarName';
import SectionTitle from '../../micro/SectionTitle/SectionTitle';
import TextArea from '../../micro/TextArea/TextArea';
import { useTranslation } from "react-i18next";

import {
	Container,
	Content,
	SectionText,
} from './styles';

function TextsAbout() {
  const { t, i18n: { language } } = useTranslation();

	return (
		<Container>
			<Content>
				<SectionTitle titleAbout=	{t("about")} />
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