import styled from 'styled-components';

const Button = styled.button`
	border: none;
	width: 75px;
	height: 75px;
	background-color: transparent;
	font-size: 20px;
	border-radius: 1000px;
	cursor: pointer;
	color: #ccc;
	box-shadow: 0 0 100px rgba(0, 0, 0, 0);
	transition: box-shadow 0.1s ease-out;
	z-index: 5;

	&:hover {
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);
		background-color: white;
	}

	&:active {
		box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
	}

	&:hover > * {
		color: black;
	}
`;

export const LeftButton = styled(Button)`
	grid-column: 3 / 4;
	grid-row: 3 / 4;
	justify-self: start;
`;

export const RightButton = styled(Button)`
	grid-column: 6 / 7;
	grid-row: 3 / 4;
	justify-self: end;
`;

export const UpButton = styled(Button)`
	grid-column: 4 / 6;
	grid-row: 1 / 3;
`;

export const DownButton = styled(Button)`
	grid-column: 4 / 6;
	grid-row: 4 / 6;
`;
