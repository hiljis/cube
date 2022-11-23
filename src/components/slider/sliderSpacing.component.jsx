import { useDispatch, useSelector } from 'react-redux';
import { selectSpacing, setSpacing } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderSpacing = ({ inputHandler, horizontal }) => {
	const spacingValue = useSelector((state) => selectSpacing(state, 'active'));
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		if (inputHandler) inputHandler(e.target.value);
		else dispatch(setSpacing(e.target.value));
	};

	return (
		<Slider
			horizontal={horizontal}
			title="spacing"
			min={0}
			max={500}
			value={spacingValue}
			inputHandler={handleOnInput}
			step={50}
		/>
	);
};
