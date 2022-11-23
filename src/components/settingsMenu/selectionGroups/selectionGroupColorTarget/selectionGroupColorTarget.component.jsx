import { useDispatch, useSelector } from 'react-redux';
import { selectActiveColorTarget, setActiveColorTarget } from '../../../../store/cube/cubeSlice';
import { SelectionLabel } from '../selectionGroup.styles';
import {
	ColorTargetContainer,
	SelectionTargetColor,
	SelectionTargetColorText,
} from './selectionGroupColorTarget.styles';

export const SELECTION_BASE = 'base';
export const SELECTION_SHADE = 'shade';
export const SELECTION_EDGE = 'edge';
export const SELECTION_GLOW = 'glow';

export const SelectionGroupColorTarget = () => {
	const dispatch = useDispatch();
	const activeColorTarget = useSelector(selectActiveColorTarget);

	const handleClick = (e) => {
		const button = e.target.closest('button');
		if (!button) return;
		dispatch(setActiveColorTarget(button.id));
	};

	return (
		<ColorTargetContainer onClick={handleClick}>
			<SelectionLabel>Color Target</SelectionLabel>
			<SelectionTargetColor id={SELECTION_BASE} active={activeColorTarget === 'base'}>
				<SelectionTargetColorText>base</SelectionTargetColorText>
			</SelectionTargetColor>
			<SelectionTargetColor id={SELECTION_SHADE} active={activeColorTarget === 'shade'}>
				<SelectionTargetColorText>shade</SelectionTargetColorText>
			</SelectionTargetColor>
			<SelectionTargetColor id={SELECTION_EDGE} active={activeColorTarget === 'edge'}>
				<SelectionTargetColorText>edge</SelectionTargetColorText>
			</SelectionTargetColor>
			<SelectionTargetColor id={SELECTION_GLOW} active={activeColorTarget === 'glow'}>
				<SelectionTargetColorText>glow</SelectionTargetColorText>
			</SelectionTargetColor>
		</ColorTargetContainer>
	);
};
