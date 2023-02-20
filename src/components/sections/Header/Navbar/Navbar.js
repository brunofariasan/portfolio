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

export function Header({ secHomeRef, secAboutRef, secWorkRef, secBlogRef, secLetsTalkRef }) {

	const { t, i18n: { changeLanguage, language } } = useTranslation()
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

	function handleSection1Click() {
		secHomeRef.current.scrollIntoView({ behavior: "smooth" });
	}

	function handleSection2Click() {
		secAboutRef.current.scrollIntoView({ behavior: "smooth" });
	}

	function handleSection3Click() {
		secWorkRef.current.scrollIntoView({ behavior: "smooth" });
	}
	function handleSection4Click() {
		secBlogRef.current.scrollIntoView({ behavior: "smooth" });
	}

	function handleSection5Click() {
		secLetsTalkRef.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<Container>
			<Navbar>
				<Nav>
					<Ul>
						<Li>
							<A onClick={handleSection1Click}>HOME</A>
						</Li>
						<Li>
							<A onClick={handleSection2Click}>{t("about")}</A>
						</Li>
						<Li>
							<A onClick={handleSection3Click}>{t("work")}</A>
						</Li>
						<Li>
							<A onClick={handleSection4Click}>{t("blog")}</A>
						</Li>
						<Li>
							<A onClick={handleSection5Click}>{t("contact")}</A>
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