import { useDispatch, useSelector } from 'react-redux';
import { selectOpacity, setOpacity } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderOpacity = ({ inputHandler, horizontal }) => {
	const opacityVal = useSelector(state => selectOpacity(state, 'active'));
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		if (inputHandler) inputHandler(e.target.value);
		else dispatch(setOpacity(e.target.value));
	};

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
