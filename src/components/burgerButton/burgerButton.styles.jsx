import { ToggleButton } from '../../styles/toggleButton.styles';

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

export const BurgerButtonContainer = styled(ToggleButton)`
	grid-row: 1 / 1;
	grid-column: 8 / 9;
	align-self: end;

	&:hover > ${LineTop} {
		transform: translateY(-7px);
	}

	&:hover > ${LineBottom} {
		transform: translateY(7px);
	}

	${({ isOpen }) =>
		isOpen &&
		`
			& > ${LineMiddle} {
				opacity: 0;
			}

			& > ${LineTop} {
				transform: rotate(45deg);
			}

			& > ${LineBottom} {
				transform: rotate(-45deg);
			}

			&:hover > ${LineTop} {
				transform: rotate(45deg);
			}

			&:hover > ${LineBottom} {
				transform: rotate(-45deg);
			}
		`}
`;
