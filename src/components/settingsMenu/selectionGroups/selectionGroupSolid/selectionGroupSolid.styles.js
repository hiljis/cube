import styled from 'styled-components';
import {
	SELECTION_NOT_SOLID,
	SELECTION_SOLID,
} from './selectionGroupSolid.component';

import { Selection } from '../selectionGroup.styles';

export const SelectionSolid = styled(Selection)`
	${(props) =>
		props.id === SELECTION_SOLID &&
		props.isSolid &&
		`
			box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}

	${(props) =>
		props.id === SELECTION_NOT_SOLID &&
		!props.isSolid &&
		`
        	box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}
`;
