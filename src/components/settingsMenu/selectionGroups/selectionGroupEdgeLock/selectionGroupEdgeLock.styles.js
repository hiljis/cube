import styled from 'styled-components';

import { Selection } from '../selectionGroup.styles';
import {
	SELECTION_OPEN,
	SELECTION_CLOSED,
} from './selectionGroupEdgeLock.component';

export const SelectionEdgeLock = styled(Selection)`
	${(props) =>
		props.id === SELECTION_OPEN &&
		!props.isEdgeLocked &&
		`
			box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}

	${(props) =>
		props.id === SELECTION_CLOSED &&
		props.isEdgeLocked &&
		`
        	box-shadow: inset 0 0 0 1px blue;
			&:hover {
				box-shadow: inset 0 0 0 1px blue;
			}
    	`}
`;
