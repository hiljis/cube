import styled from 'styled-components';
import {
	SELECTION_ROUNDED,
	SELECTION_SQUARED,
} from './selectionGroupShape.component';

import { Selection } from '../selectionGroup.styles';

export const SelectionShape = styled(Selection)`
	${(props) =>
		props.id === SELECTION_ROUNDED &&
		props.isRounded &&
		`
			box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}

	${(props) =>
		props.id === SELECTION_SQUARED &&
		!props.isRounded &&
		`
        	box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}
`;
