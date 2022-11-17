import styled from 'styled-components';

export const ToggleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	background-color: blue;
	border: 1px solid blue;
	border-radius: 100px;
	cursor: pointer;
	opacity: 0.8;
	z-index: 20;

	transition: all 0.2s;

	&:hover {
		opacity: 1;
		transform: scale(1.05);
		filter: drop-shadow(3px 3px 0px rgb(135, 135, 255));
	}

	&:active {
		transform: scale(1.02);
		filter: drop-shadow(1px 1px 0px rgb(135, 135, 255));
	}
`;
