import styled from 'styled-components';

const Line = styled.div`
	position: absolute;
	width: 30px;
	height: 1px;
	background-color: white;
	border-radius: 100px;
`;

export const LineTop = styled(Line)`
	transform: translateY(-5px);
	transition: transform 0.1s ease-out;
`;

export const LineMiddle = styled(Line)``;

export const LineBottom = styled(Line)`
	transform: translateY(5px);
	transition: transform 0.1s ease-out;
`;

export const BurgerButtonContainer = styled.div`
	grid-row: 1 / 1;
	grid-column: 8 / 9;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	background-color: blue;
	border-radius: 100px;
	cursor: pointer;
	z-index: 10;
	transition: transform 0.2s ease-out, background-color 0.3s;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 0 2px rgba(164, 164, 255, 1);
	}

	&:hover > ${LineTop} {
		transform: translateY(-7px);
	}

	&:hover > ${LineBottom} {
		transform: translateY(7px);
	}

	${({ isOpen }) =>
		isOpen &&
		`
		background-color: white;

		& > ${LineMiddle} {
		opacity: 0;
	}

		& > ${LineTop} {
		transform: rotate(45deg);
		background-color: blue;
	}

	& > ${LineBottom} {
		transform: rotate(-45deg);
		background-color: blue;
	}

	&:hover > ${LineTop} {
		transform: rotate(45deg);
	}

	&:hover > ${LineBottom} {
		transform: rotate(-45deg);
	}
	`}
`;
