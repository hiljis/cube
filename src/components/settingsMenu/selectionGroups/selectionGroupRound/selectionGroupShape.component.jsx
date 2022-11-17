import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsSolidActive,
	setIsSolid,
} from '../../../../store/cube/cubeSlice';
import {
	StyledCubeIconFilled,
	StyledCubeIconOutlined,
} from '../../../../styles/icons.components';
import {
	SelectionLabel,
	SelectionGroupContainer,
} from '../selectionGroup.styles';
import { SelectionShape } from './selectionGroupShape.styles';

export const SELECTION_SOLID = 'selection_round';
export const SELECTION_NOT_SOLID = 'selection_squared';

export const SelectionGroupShape = () => {
	const dispatch = useDispatch();
	const isSolid = useSelector(selectIsSolidActive);

	const handleClick = (e) => {
		const button = e.target.closest('button');
		if (!button) return;
		const id = button.id;
		console.log(id);
		// const isSolid = id === SELECTION_SOLID;
		// dispatch(setIsSolid(isSolid));
	};

	return (
		<SelectionGroupContainer onClick={handleClick}>
			<SelectionLabel>Shape:</SelectionLabel>
			<SelectionShape id={SELECTION_SOLID} isSolid={isSolid}>
				<StyledCubeIconFilled
					height={30}
					color="black"
					hovercolor="black"
				/>
			</SelectionShape>
			<SelectionShape id={SELECTION_NOT_SOLID} isSolid={isSolid}>
				<StyledCubeIconOutlined
					height={30}
					color="black"
					hovercolor="black"
				/>
			</SelectionShape>
		</SelectionGroupContainer>
	);
};
