import { useDispatch, useSelector } from 'react-redux';
import { selectShadeEffectActive, setShadeEffect } from '../../store/cube/cubeSlice';
import { Slider } from './slider.component';

export const SliderShade = () => {
	const shadeValue = useSelector(selectShadeEffectActive);
	const dispatch = useDispatch();

	const handleOnInput = (e) => {
		dispatch(setShadeEffect(e.target.value));
	};

	return <Slider title="shade" min={0} max={100} value={shadeValue} inputHandler={handleOnInput} step={10} />;
};
