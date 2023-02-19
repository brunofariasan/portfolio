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

export function NavbarMobile({ menuIsVisible, setMenuIsVisible }) {
	useEffect(() => {
		document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
	}, [menuIsVisible]);

	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation()

	const [curentLanguage, setCurentLanguage] = useState(language)

	const handleLanguage = () => {

		const newLanguage = curentLanguage === 'en' ? 'br' : 'en'
		changeLanguage(newLanguage)
		setCurentLanguage(newLanguage)
		console.log('teste')
	}


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
					<Button background="transparent" width="42px">
						{curentLanguage === 'br' ? (
							<img src={usa} onClick={handleLanguage} />
						) : (
							<img src={br} onClick={handleLanguage} />
						)}
					</Button>

				</Ul>
			</Nav>
			<CloseNavbar>
				<HiX size={45} color="#FFB800" onClick={() => setMenuIsVisible(false)} />
			</CloseNavbar>
		</Container>
	)
}