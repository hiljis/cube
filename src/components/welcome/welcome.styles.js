import styled from 'styled-components';

export const StyledBackgroundWelcome = styled.div`
	position: absolute;
	right: 0;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
	background-color: blue;
	color: white;
	z-index: 100;

	opacity: ${(props) => (props.show ? 1 : 0)};

	transition: opacity 1s;
`;

export const StyledAnimatedText = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 32px;
	color: white;
	font-weight: 600;
	width: ${(props) => (props.show ? 0 : '1000px')};
	height: ${(props) => (props.show ? 0 : '1000px')};
	border-radius: 1000px;
	background-color: white;
	cursor: pointer;

	transition: all 2s;
`;
