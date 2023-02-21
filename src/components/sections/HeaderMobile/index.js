import { HiX } from 'react-icons/hi';
import usa from '../../../assets/eua.svg';
import br from '../../../assets/br.svg';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from '../../micro/Button/Button';
import {
	Container,
	Nav,
	Ul,
	Li,
	A,
	CloseNavbar,
} from './styles';
import {
	Idioma,
	IdiomaName,
	LanguageSelectionSession,
	SectionButton
} from '../Header/Navbar/styles';

export function NavbarMobile({ 
	menuIsVisible, 
	setMenuIsVisible, 
	secHomeRef, 
	secAboutRef, 
	secWorkRef, 
	secBlogRef, 
	secLetsTalkRef 
}) {
	useEffect(() => {
		document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
	}, [menuIsVisible]);
	const [showDiv, setShowDiv] = useState(false);
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();

	const [curentLanguage, setCurentLanguage] = useState(language)

	const handleLanguage = () => {
		const newLanguage = curentLanguage === 'en' ? 'pt' : 'en'
		changeLanguage(newLanguage);
		setCurentLanguage(newLanguage);
	}

	const handleButtonClick = () => {
		setShowDiv(!showDiv);
	};

	function handleSection1Click() {
		secHomeRef.current.scrollIntoView({ behavior: "smooth" });
		setMenuIsVisible(false)
	}

	function handleSection2Click() {
		secAboutRef.current.scrollIntoView({ behavior: "smooth" });
		setMenuIsVisible(false)
	}

	function handleSection3Click() {
		secWorkRef.current.scrollIntoView({ behavior: "smooth" });
		setMenuIsVisible(false)
	}
	function handleSection4Click() {
		secBlogRef.current.scrollIntoView({ behavior: "smooth" });
		setMenuIsVisible(false)
	}

	function handleSection5Click() {
		secLetsTalkRef.current.scrollIntoView({ behavior: "smooth" });
		setMenuIsVisible(false)
	}

	return (
		<Container isVisible={menuIsVisible}>
			<Nav>
				<Ul>
					<Li>
						<A onClick={handleSection1Click}> HOME </A>
					</Li>
					<Li>
						<A onClick={handleSection2Click}> {t("about")} </A>
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
								<SectionButton onClick={handleLanguage}>
									<Idioma>
										{curentLanguage === 'pt' ? (
											t("english") + " - "
										) : (
											t("portuguese") + " - "
										)}
									</Idioma>
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
					</Li>
				</Ul>
			</Nav>
			<CloseNavbar>
				<HiX
					size={45}
					color="#FFB800"
					onClick={() => setMenuIsVisible(false)}
				/>
			</CloseNavbar>
		</Container>
	)
}