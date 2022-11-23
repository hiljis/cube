import { useDispatch, useSelector } from 'react-redux';
import { selectIsRounded, setIsRounded } from '../../../../store/cube/cubeSlice';
import { StyledRoundIconOutlined, StyledSquareIconOutlined } from '../../../../styles/icons.components';
import { SelectionLabel, SelectionGroupContainer } from '../selectionGroup.styles';
import { SelectionShape } from './selectionGroupShape.styles';

export const SELECTION_ROUNDED = 'selection_round';
export const SELECTION_SQUARED = 'selection_squared';

export const SelectionGroupShape = () => {
	const dispatch = useDispatch();
	const isRound = useSelector((state) => selectIsRounded(state, 'active'));

	const handleClick = (e) => {
		const button = e.target.closest('button');
		if (!button) return;
		const id = button.id;
		const isRounded = id === SELECTION_ROUNDED;
		dispatch(setIsRounded(isRounded));
	};

	return (
		<SelectionGroupContainer onClick={handleClick}>
			<SelectionLabel>Shape</SelectionLabel>
			<SelectionShape id={SELECTION_ROUNDED} isRounded={isRound}>
				<StyledRoundIconOutlined height={20} color="black" hovercolor="black" />
			</SelectionShape>
			<SelectionShape id={SELECTION_SQUARED} isRounded={isRound}>
				<StyledSquareIconOutlined height={20} color="black" hovercolor="black" />
			</SelectionShape>
		</SelectionGroupContainer>
	);
};
