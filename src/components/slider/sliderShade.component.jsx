import { useDispatch, useSelector } from 'react-redux';
import { selectShadeEffect, setShadeEffect } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderShade = ({ inputHandler, horizontal }) => {
	const shadeValue = useSelector((state) => selectShadeEffect(state, 'active'));
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		if (inputHandler) inputHandler(e.target.value);
		else dispatch(setShadeEffect(e.target.value));
	};

	return (
		<Slider
			horizontal={horizontal}
			title="shade"
			min={0}
			max={1}
			value={shadeValue}
			inputHandler={handleOnInput}
			step={0.1}
		/>
	);
};
