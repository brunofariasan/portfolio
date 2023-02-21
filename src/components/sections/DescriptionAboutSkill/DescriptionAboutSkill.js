import React from 'react';
import SectionTitle from '../../micro/SectionTitle/SectionTitle';
import aem from '../../../assets/aem.png'
import html from '../../../assets/html.svg'
import css from '../../../assets/css3.svg'
import react from '../../../assets/react.svg'
import js from '../../../assets/js.png'
import node from '../../../assets/node-js.svg'
import styleComp from '../../../assets/styled-components.svg'

import sass from '../../../assets/sass.svg'
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
					<SkillLogo src={node} />
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