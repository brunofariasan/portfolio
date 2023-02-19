import React from 'react';
import { 
  Container, 
  Name,
} from './styles';
import { useTranslation } from "react-i18next";

function TitleTalk() {
  const { t, i18n: { language } } = useTranslation();
	return (
		<Container>
			<Name>
			{t("letsTalkTitle")}
			</Name>
		</Container>
	);
}

export default TitleTalk;