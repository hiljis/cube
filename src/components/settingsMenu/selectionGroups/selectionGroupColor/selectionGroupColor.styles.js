import styled from 'styled-components';
import { Selection } from '../selectionGroup.styles';

export const SelectionColor = styled(Selection)`
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: ${(props) => (props.active ? 'inset 0 0 0 1px blue' : '')};
	&:hover {
		box-shadow: ${(props) => (props.active ? 'inset 0 0 0 1px blue' : 'inset 0 0 0 1px black')};
	}
`;

export const ColorDot = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 100px;
	background-color: ${(props) => props.color};
`;