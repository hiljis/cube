import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveColorTargetColor } from '../../../../store/cube/cubeSlice';
import { SelectionLabel, SelectionGroupContainer } from '../selectionGroup.styles';
import { ColorPicker } from './colorPicker/colorPicker.component';
import { ColorDot, SelectionColor } from './selectionGroupColor.styles';

export const SELECTION_MAIN = 'selection_main';
export const SELECTION_SHADE = 'selection_shade';
export const SELECTION_EDGE = 'selection_edge';

export const SelectionGroupColor = () => {
	const [showColorPicker, setShowColorPicker] = useState(false);
	const color = useSelector(selectActiveColorTargetColor);

	useEffect(() => {
		const handleClickOutsideColorPicker = (e) => {
			if (showColorPicker === true && e.target.closest('#colorPicker') === null) {
				setShowColorPicker(false);
			}
		};
		window.addEventListener('click', handleClickOutsideColorPicker);
		return () => window.removeEventListener('click', handleClickOutsideColorPicker);
	}, []);

	const toggleShowColorPicker = () => {
		setShowColorPicker((prev) => !prev);
	};

	return (
		<SelectionGroupContainer>
			<SelectionLabel>Color</SelectionLabel>
			<SelectionColor active={showColorPicker} onClick={toggleShowColorPicker}>
				<ColorDot color={`rgb(${color})`} />
			</SelectionColor>
			{showColorPicker ? <ColorPicker /> : ''}
		</SelectionGroupContainer>
	);
};
