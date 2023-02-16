import React from 'react';
import SectionTitle from '../../micro/SectionTitle/SectionTitle';
import aem from '../../../assets/aem.png'
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import react from '../../../assets/react.png'
import js from '../../../assets/js.png'
import styleComp from '../../../assets/styledComp.png'
import sass from '../../../assets/sass.png'
import SkillLogo from '../../../components/micro/SkillLogo/SkillLogo';
import {
	Container,
	Content,
	SectionLogo,
} from './styles';

function DescriptionAboutSkill() {
	return (
		<Container>
			<Content>
				<SectionTitle titleAbout='SKILLS' />
				<SectionLogo>
					<SkillLogo src={aem} />
					<SkillLogo src={js} />
					<SkillLogo src={react} />
					<SkillLogo src={css} />
					<SkillLogo src={html} />
					<SkillLogo src={sass} />
					<SkillLogo src={styleComp} />
				</SectionLogo>
			</Content>
		</Container>
	);
}

export default DescriptionAboutSkill;