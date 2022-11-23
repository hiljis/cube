import { useDispatch, useSelector } from 'react-redux';
import { selectActiveColorTargetOpacity, setActiveColorTargetOpacity } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderColorTargetOpacity = ({ inputHandler, horizontal }) => {
	const opacityVal = useSelector(selectActiveColorTargetOpacity);
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		console.log(e.target.value);
		if (inputHandler) inputHandler(e.target.value);
		else dispatch(setActiveColorTargetOpacity(e.target.value));
	};

	console.log(opacityVal);
	return (
		<Slider
			horizontal={horizontal}
			title="opacity"
			min={0}
			max={100}
			value={opacityVal}
			inputHandler={handleOnInput}
			step={10}
		/>
	);
};
