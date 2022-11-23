import styled from 'styled-components';

export const ColorOptionsPage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const ColorOption = styled.div`
	width: 20px;
	height: 100%;
	cursor: pointer;
	background-color: ${(props) => props.bgColor};
	opacity: 1;
	position: relative;

	&:hover {
		opacity: 0.8;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 5px;
		left: 50%;
		transform: translateX(-50%);
		width: 10px;
		height: 10px;
		border-radius: 100px;
		background-color: white;
		opacity: ${(props) => (props.active ? 1 : 0)};
	}
`;

export const BtnLeft = styled.button`
	padding: 0 5px;
	border: none;
	border-right: 1px solid black;
	background-color: white;
	color: black;
	cursor: pointer;

	&:hover {
		background-color: black;
		color: white;
	}
`;

export const BtnRight = styled.button`
	padding: 0 5px;
	border: none;
	border-left: 1px solid black;
	background-color: white;
	color: black;
	cursor: pointer;

	&:hover {
		background-color: black;
		color: white;
	}
`;
