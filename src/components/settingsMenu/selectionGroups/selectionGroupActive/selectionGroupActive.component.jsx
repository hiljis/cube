import { useDispatch, useSelector } from 'react-redux';
import {
	addSecondary,
	removeSecondary,
	selectActiveCube,
	selectRenderSecondary,
	setActive,
} from '../../../../store/cube/cubeSlice';
import {
	SelectionLabel,
	SelectionGroupContainer,
} from '../selectionGroup.styles';
import {
	SelectionActive,
	SelectionAddSecondary,
	StyledIconCharacter,
	StyledIconNumber,
} from './selectionGroupActive.styles';

export const SELECTION_MAIN = 'main';
export const SELECTION_SECONDARY = 'secondary';
export const SELECTION_ADD = 'add';

export const SelectionGroupActive = () => {
	const dispatch = useDispatch();
	const activeCube = useSelector(selectActiveCube);
	const renderSecondary = useSelector(selectRenderSecondary);

	const handleClick = (e) => {
		const button = e.target.closest('button');
		if (!button) return;
		const id = button.id;
		id === SELECTION_ADD
			? dispatch(addSecondary())
			: dispatch(setActive(id));
	};

	const handleDoubleClick = (e) => {
		const button = e.target.closest('button');
		if (!button || button.id !== SELECTION_SECONDARY) return;
		console.log(button.id);
		dispatch(removeSecondary());
	};

	return (
		<SelectionGroupContainer
			onClick={handleClick}
			onDoubleClick={handleDoubleClick}
		>
			<SelectionLabel>Active</SelectionLabel>
			<SelectionActive id={SELECTION_MAIN} activeCube={activeCube}>
				<StyledIconNumber>
					<span>1</span>
				</StyledIconNumber>
			</SelectionActive>

			{renderSecondary ? (
				<SelectionActive
					id={SELECTION_SECONDARY}
					activeCube={activeCube}
				>
					<StyledIconNumber>
						<span>2</span>
					</StyledIconNumber>
				</SelectionActive>
			) : (
				<SelectionAddSecondary id={SELECTION_ADD}>
					<StyledIconCharacter>
						<span>+</span>
					</StyledIconCharacter>
				</SelectionAddSecondary>
			)}
		</SelectionGroupContainer>
	);
};
