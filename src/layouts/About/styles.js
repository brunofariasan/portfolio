import styled from "styled-components";

export const Container = styled.div`
	background-color: #252525;
	min-height: 634px;
	display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
	padding: 40px;
	align-items: center;
	justify-content: center;
`;

export const DivFlex = styled.div`
  display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const SectionImage = styled.div`
	display: flex;
	width: 40%;
	height: 30%;
	min-width: 230px;
	min-height: 230px;
	justify-content: space-around;

	@media (max-width: 768px) {
  	gap: 0px;
		display: none;
	}
`;

export const SectionAbout = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	gap: 40px;

	@media (max-width: 768px) {
		min-height: 570px;
		justify-content: space-evenly;
		width: 100%;
	}
`;


// export const Background = styled.img`
//   filter: brightness(30%);
//   height: 45%;
// 	user-drag: none;
// 	width: 100%;
// 	min-width: 230px;

// 	/* @keyframes spin {
// 		0% { transform: rotate(0deg); }
// 		100% { transform: rotate(60deg); }
// 	} */
// 	:hover {
//   	filter: grayscale(25%);
// 			//transition: all 10.4s;

// 	}

//   @media (max-width: 500px) {
//   width: 100%;
// 	}
// `;

// export const Div = styled.div`
//   display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	height: 100%;
// 	gap: 10px;

// 	@media (max-width: 768px) {
// 		align-items: center;
// 		    height: 100%;
// 	}
// `;

// export const Div2 = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	height: 100%;
// 	gap: 15px;

// 	 @media (max-width: 768px) {
// 		 align-items: center;
// 		     height: 100%;
// 	}
// `;

// export const SectionText = styled.div`
//   max-width: 700px;
// 	padding-top: 10px;
// 	 @media (max-width: 768px) {
// 		 text-align: center;
// 	}
// `;

// export const SectionLogo = styled.div`
// 	/* height: 150px; */
// 	display: flex;
// 	gap: 50px;
// 	align-items: center;
// 	/* max-width: 400px; */
// 	/* margin: 0 auto; */
// 	  @media (max-width: 1400px) {
//   		width: 100%;
// 		flex-wrap: wrap;
// 	}
// 	 @media (max-width: 768px) {
// 			justify-content: center;
// 			gap: 30px;
// 	}
// `;


// export const ImgLogo = styled.img`
//   height: 60px;
// 	width: 60px;
// 	filter: grayscale(100%);
// 	transition: all 0.2s ease;
// 	cursor: pointer;
// 	user-drag: none;

//   /* @media (max-width: 500px) {
//   width: 100%;
// 	} */

// 	:hover {
//   filter: grayscale(0%);
// 	}
	
// `;
