import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import usa from '../../../../assets/eua.svg';
import br from '../../../../assets/br.svg';
import Button from "../../../micro/Button/Button";

import {
	Container,
	Navbar,
	Nav,
	Ul,
	Li,
	A,
	LanguageSelectionSession,
	IdiomaName,
	Idioma,
	SectionButton,
} from "./styles";

export function Header({ sectionRef }) {
	const {t, i18n: { changeLanguage, language } } = useTranslation()
	const [curentLanguage, setCurentLanguage] = useState(language)
	const [showDiv, setShowDiv] = useState(false);
	
	const handleLanguage = () => {
		const newLanguage = curentLanguage === 'en' ? 'pt' : 'en'
		changeLanguage(newLanguage)
		setCurentLanguage(newLanguage)
		setShowDiv(!showDiv);
	}

	const handleButtonClick = () => {
		setShowDiv(!showDiv);
	};

	return (
		<Container>
			<Navbar>
				<Nav>
					<Ul>
						<Li>
							<A href="#">HOME</A>
						</Li>
						<Li>
							<A href="#">{t("about")}</A>
						</Li>
						<Li>
							<A href="#">{t("work")}</A>
						</Li>
						<Li>
							<A href="#">{t("contact")}</A>
						</Li>
						<Li>
							<LanguageSelectionSession 
								onClick={handleButtonClick}
							>
								<IdiomaName>
									<Idioma>{curentLanguage}</Idioma>
								</IdiomaName>
								{showDiv &&
									<SectionButton>
											<Button background="transparent">
												{curentLanguage === 'pt' ? (
													<img src={usa} onClick={handleLanguage} />
												) : (
													<img src={br} onClick={handleLanguage} />
												)}
											</Button>
									</SectionButton>
								}
							</LanguageSelectionSession>
						</Li>
					</Ul>
				</Nav>
			</Navbar>
		</Container>
	)
}

export default Header;