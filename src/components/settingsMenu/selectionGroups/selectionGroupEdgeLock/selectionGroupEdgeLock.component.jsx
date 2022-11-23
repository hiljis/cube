import { useDispatch, useSelector } from 'react-redux';
import { selectIsEdgeLocked, setIsEdgeLocked } from '../../../../store/cube/cubeSlice';
import { StyledLockClosedIconOutlined, StyledLockOpenIconOutlined } from '../../../../styles/icons.components';
import { SelectionLabel, SelectionGroupContainer } from '../selectionGroup.styles';
import { SelectionEdgeLock } from './selectionGroupEdgeLock.styles';

export const SELECTION_OPEN = 'selection_open';
export const SELECTION_CLOSED = 'selection_closed';

export const SelectionGroupEdgeLock = () => {
	const dispatch = useDispatch();
	const isEdgeLocked = useSelector((state) => selectIsEdgeLocked(state, 'active'));

	const handleClick = (e) => {
		const button = e.target.closest('button');
		if (!button) return;
		const id = button.id;
		const isEdgeLocked = id === SELECTION_CLOSED;
		dispatch(setIsEdgeLocked(isEdgeLocked));
	};

	return (
		<SelectionGroupContainer onClick={handleClick}>
			<SelectionLabel>Edge Lock</SelectionLabel>
			<SelectionEdgeLock id={SELECTION_OPEN} isEdgeLocked={isEdgeLocked}>
				<StyledLockOpenIconOutlined height={20} color="black" hovercolor="black" />
			</SelectionEdgeLock>
			<SelectionEdgeLock id={SELECTION_CLOSED} isEdgeLocked={isEdgeLocked}>
				<StyledLockClosedIconOutlined height={20} color="black" hovercolor="black" />
			</SelectionEdgeLock>
		</SelectionGroupContainer>
	);
};
