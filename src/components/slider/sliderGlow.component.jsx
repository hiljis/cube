import { useDispatch, useSelector } from 'react-redux';
import { selectGlowAmount, setGlowAmount } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderGlow = ({ horizontal }) => {
	const glowValue = useSelector(selectGlowAmount);
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		dispatch(setGlowAmount(e.target.value));
	};

	return (
		<Slider
			horizontal={horizontal}
			title="glow"
			min={0}
			max={100}
			value={glowValue}
			inputHandler={handleOnInput}
			step={10}
		/>
	);
};
