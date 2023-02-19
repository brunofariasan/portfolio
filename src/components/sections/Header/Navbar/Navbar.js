import {
	Container,
	Navbar,
	Nav,
	Ul,
	Li,
	A,
} from "./styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import usa from '../../../../assets/eua.svg';
import br from '../../../../assets/br.svg';
import Button from "../../../micro/Button/Button";

export function Header() {
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
						<Button background="transparent">
							{curentLanguage === 'br' ? (
								<img src={usa} onClick={handleLanguage} />
							) : (
								<img src={br} onClick={handleLanguage} />
							)}
						</Button>

						</Li>
					</Ul>
				</Nav>
			</Navbar>
		</Container>
	)
}
export default Header;