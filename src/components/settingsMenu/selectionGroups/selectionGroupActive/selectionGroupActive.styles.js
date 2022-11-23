import styled from 'styled-components';

import { Selection } from '../selectionGroup.styles';
import { SELECTION_MAIN, SELECTION_SECONDARY } from './selectionGroupActive.component';

export const SelectionActive = styled(Selection)`
	${(props) =>
		props.id === SELECTION_MAIN &&
		props.activeCube === SELECTION_MAIN &&
		`
			box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}

	${(props) =>
		props.id === SELECTION_SECONDARY &&
		props.activeCube === SELECTION_SECONDARY &&
		`
        	box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}
`;

export const StyledIconNumber = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	& > span {
		margin: auto;
		font-size: 12px;
		font-weight: 600;
		color: inherit;
	}
`;

export const StyledIconCharacter = styled(StyledIconNumber)`
	& > span {
		font-size: 21px;
		font-weight: 300;
	}
`;

export const SelectionAddSecondary = styled.button`
	position: relative;
	width: 30px;
	height: 30px;
	display: flex;
	cursor: pointer;
	border: none;
	border-radius: 1000px;
	background-color: blue;
	color: white;
	margin: 10px;

	transition: transform 0.2s, box-shadow 0.2s, background-color 1s;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(1);
	}
`;
