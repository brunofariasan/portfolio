import React from 'react';
import { 
	Container, 
	LogoImg,
	Img,  
} from './styles';

function SkillLogo(props) {
	const { src } = props;
	return (
		<Container>
      <LogoImg>
        <Img src={src} />  
      </LogoImg>
		</Container>
	);
}

export default SkillLogo;