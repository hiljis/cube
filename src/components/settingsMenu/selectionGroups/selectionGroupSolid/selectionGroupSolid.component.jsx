import { useDispatch, useSelector } from 'react-redux';
import { selectIsSolid, setIsSolid } from '../../../../store/cube/cubeSlice';
import { StyledCubeIconFilled, StyledCubeIconOutlined } from '../../../../styles/icons.components';
import { SelectionLabel, SelectionGroupContainer } from '../selectionGroup.styles';
import { SelectionSolid } from './selectionGroupSolid.styles';

export const SELECTION_SOLID = 'selection_solid';
export const SELECTION_NOT_SOLID = 'selection_not_solid';

export const SelectionGroupSolid = () => {
	const dispatch = useDispatch();
	const isSolid = useSelector((state) => selectIsSolid(state, 'active'));

	const handleClick = (e) => {
		const button = e.target.closest('button');
		if (!button) return;
		const id = button.id;
		const isSolid = id === SELECTION_SOLID;
		dispatch(setIsSolid(isSolid));
	};

	return (
		<SelectionGroupContainer onClick={handleClick}>
			<SelectionLabel>Solid</SelectionLabel>
			<SelectionSolid id={SELECTION_SOLID} isSolid={isSolid}>
				<StyledCubeIconFilled height={20} color="black" hovercolor="black" />
			</SelectionSolid>
			<SelectionSolid id={SELECTION_NOT_SOLID} isSolid={isSolid}>
				<StyledCubeIconOutlined height={20} color="black" hovercolor="black" />
			</SelectionSolid>
		</SelectionGroupContainer>
	);
};
