import styled from 'styled-components';

import { Selection, SelectionGroupContainer } from '../selectionGroup.styles';

export const ColorTargetContainer = styled(SelectionGroupContainer)`
	gap: 10px;
	width: min-content;
`;

export const SelectionTargetColor = styled(Selection)`
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: ${(props) => (props.active ? 'inset 0 0 0 1px blue' : 'none')};
	&:hover {
		box-shadow: ${(props) => (props.active ? 'inset 0 0 0 1px blue' : 'inset 0 0 0 1px black')};
	}
`;

export const SelectionTargetColorText = styled.span`
	font-size: 10px;
	text-transform: uppercase;
`;
