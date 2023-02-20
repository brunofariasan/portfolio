import { HiX } from 'react-icons/hi';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import usa from '../../../assets/eua.svg';
import br from '../../../assets/br.svg';
import {
	Container,
	Nav,
	Ul,
	Li,
	A,
	CloseNavbar,
} from './styles';
import Button from '../../micro/Button/Button';
import { Idioma, IdiomaName, LanguageSelectionSession, SectionButton } from '../Header/Navbar/styles';

export function NavbarMobile({ menuIsVisible, setMenuIsVisible }) {
	useEffect(() => {
		document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
	}, [menuIsVisible]);
	const [showDiv, setShowDiv] = useState(false);
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation()

	const [curentLanguage, setCurentLanguage] = useState(language)

	const handleLanguage = () => {

		const newLanguage = curentLanguage === 'en' ? 'pt' : 'en'
		changeLanguage(newLanguage)
		setCurentLanguage(newLanguage)
	}

	const handleButtonClick = () => {
		setShowDiv(!showDiv);
	};

	return (
		<Container isVisible={menuIsVisible}>
			<Nav>
				<Ul>
					<Li>
						<A href="#"> HOME </A>
					</Li>
					<Li>
						<A href="#"> {t("about")} </A>
					</Li>
					<Li>
						<A href="#">{t("work")}</A>
					</Li>
					<Li>
						<A href="#">{t("contact")}</A>
					</Li>


					
					<LanguageSelectionSession onClick={handleButtonClick}>
						<IdiomaName>
							<Idioma>{curentLanguage}</Idioma>
						</IdiomaName>
						{showDiv &&
							<SectionButton onClick={handleLanguage}>
								<Idioma>{curentLanguage === 'pt' ? t("english") + " - ": t("portuguese")  + " - "}</Idioma>
								<Button background="transparent">
									{curentLanguage === 'en' ? (
										<img src={br} />
									) : (
										<img src={usa} />
									)}
								</Button>
							</SectionButton>
						}
					</LanguageSelectionSession>
				</Ul>
			</Nav>
			<CloseNavbar>
				<HiX size={45} color="#FFB800" onClick={() => setMenuIsVisible(false)} />
			</CloseNavbar>
		</Container>
	)
}