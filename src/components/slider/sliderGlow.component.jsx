import { useDispatch, useSelector } from 'react-redux';
import { selectGlow, setGlow } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderGlow = () => {
	const glowValue = useSelector(selectGlow);
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		dispatch(setGlow(e.target.value));
	};

	return <Slider title="glow" min={0} max={100} value={glowValue} inputHandler={handleOnInput} step={10} />;
};
